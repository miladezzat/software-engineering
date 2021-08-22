---
card: "/images/default.jpg"
tags: [JavaScript]
description: "React-navigation is the navigation library that comes to my m"
author: "Milad E. Fahmy"
title: "How to Handle Navigation in React Native with react-navigation 5"
created: "2021-08-16T11:27:55+02:00"
modified: "2021-08-16T11:27:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react-native tag-react-hooks tag-react-navigation tag-react-navigation-5 tag-technology tag-programming-languages tag-mobile-app-development tag-ios tag-android ">
<header class="post-full-header">
<h1 class="post-full-title">How to Handle Navigation in React Native with react-navigation 5</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/react-navigation5-featured-1.png 300w,
/news/content/images/size/w600/2020/03/react-navigation5-featured-1.png 600w,
/news/content/images/size/w1000/2020/03/react-navigation5-featured-1.png 1000w,
/news/content/images/size/w2000/2020/03/react-navigation5-featured-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/react-navigation5-featured-1.png" alt="How to Handle Navigation in React Native with react-navigation 5">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I'm a big fan of this library and it's always the first solution I use to handle navigation in React Native. This is in part becausae it has an awesome and easy API and is very customizable.</p>
<p>I'm writing this article because version 5 just went from beta to stable. It comes with some feature changes and a new API design that provides a simple and different way to declare routes.</p>
<p>In this article, we are going to go through the new APIs and look at ways to use them in our applications.</p>
<blockquote>
<p>Originally published on <a href="https://saidhayani.com/Introducing-react-navigation-5/">saidhayani.com</a></p>
</blockquote>
<h2 id="installing">Installing</h2>
<p>The way you install react-navigation has changed a little bet compared to previous versions (&gt;4.x):</p>
<pre><code class="language-shell">// &gt; 4.x verions
yarn add react-navigation
</code></pre>
<p>Installing react-navigation 5 will look like this:</p>
<pre><code class="language-shell">// yarn
yarn add @react-navigation/native
// npm
npm install @react-navigation/native
</code></pre>
<p>The latest versions of react-navigation use many third party library like <a href="https://github.com/software-mansion/react-native-gesture-handler">react-native-gesture-handler</a> for animation and handling transitions. So you always need to install those libraries.</p>
<pre><code class="language-shell">// yarn
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// npm
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
</code></pre>
<h2 id="dynamicscreens">Dynamic screens</h2>
<p>The new API introduces dynamism in initializing routes. Previously it was done statically - basically, we had to define our Routes in a config file.</p>
<pre><code class="language-jsx">// @flow
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
/** ---------Screens----------- */
// import LaunchScreen from "../Containers/LaunchScreen";
import HomeScreen from "../Containers/HomeScreen";
import ProfileScreen from "../Containers/ProfileScreen";
import LoginScreen from "../Containers/LoginScreen";
const StackNavigator = createStackNavigator(
{
initialRouteName: "Home"
},
{
Home: {
screen: HomeScreen
},
Login: {
screen: LoginScreen,
headerMode: "none",
},
Profile: {
screen: ProfileScreen
}
);
export default createAppContainer(StackNavigator);
</code></pre>
<p>The new API comes with dynamic components. and made the navigation to be more dynamic.<br>
The new way to declare the Routes will be much like the following.</p>
<pre><code class="language-jsx">import React from "react"
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
const App: () =&gt; React$Node = () =&gt; {
return (
&lt;&gt;
&lt;StatusBar barStyle="dark-content" /&gt;
&lt;SafeAreaView style={styles.containerStyle}&gt;
&lt;AppNavigation /&gt;
&lt;/SafeAreaView&gt;
&lt;/&gt;
)
}
const Stack = createStackNavigator()
const AppNavigation = () =&gt; {
return (
&lt;NavigationContainer&gt;
&lt;Stack.Navigator initialRouteName="home"&gt;
&lt;Stack.Screen name="home" component={HomeScreen} /&gt;
&lt;/Stack.Navigator&gt;
&lt;/NavigationContainer&gt;
)
}
const HomeScreen = () =&gt; {
return (
&lt;View style={styles.containerStyle}&gt;
&lt;Text style={styles.title}&gt;Home Screen&lt;/Text&gt;
&lt;/View&gt;
)
}
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/03/react-navigation5-demo.gif" alt="react-navigation5-demo"></p>
<p>This new way is dynamic, simpler to use, and is kinda similar to react-router API.</p>
<h2 id="dynamicoptions">Dynamic options</h2>
<p>This has been the most requested feature by the community for a long time. I always had issues with the old method (static) and it was really hard to change the navigation behavior dynamically.</p>
<h3 id="theoldmethod4x">The old method =&gt; &lt; 4.x</h3>
<p>With older versions of <a href="https://reactnavigation.org/">react-navigation</a> we had to define static options. And there was no way to change this dynamically.</p>
<pre><code class="language-js">  static navigationOptions = {
title: "Sign In",
header: null,
mode: "modal",
headerMode: "none"
};
</code></pre>
<h3 id="thenewmethodversion5">The new method (version 5)</h3>
<p>React-navigation comes with a dynamic method which is quite simple. We can set the options to any screen using just <code>props</code>.</p>
<pre><code class="language-jsx">const AppNavigation = ({}) =&gt; {
let auth = {
authenticated: true,
user: {
email: "user@mail.com",
username: "John",
},
}
let ProfileScreenTitle = auth.authenticated ? auth.user.username : "Profile"
return (
&lt;NavigationContainer&gt;
&lt;Stack.Navigator initialRouteName="Home"&gt;
&lt;Stack.Screen name="Home" component={HomeScreen} /&gt;
&lt;Stack.Screen
name="Profile"
component={ProfileScreen}
options={{
title: ProfileScreenTitle,
headerTintColor: "#4aa3ba",
headerStyle: {
backgroundColor: darkModeOn ? "#000" : "#fff",
},
}}
/&gt;
&lt;Stack.Screen name="About" component={AboutScreen} /&gt;
&lt;/Stack.Navigator&gt;
&lt;/NavigationContainer&gt;
)
}
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/03/react-navigation-header.png" alt="react-navigation-header"></p>
<p>With dynamic options, I can change the title based on authentication. For example if the user is authenticated, I can set the screen title to be the user’s username, or I can change the backgroundColor for the header.</p>
<p>This is more useful especially if you are using dynamic themes or if you are willing to implement dark mode in your app.</p>
<h2 id="hooks">Hooks</h2>
<p>This is my favorite feature so far, and it’s a time-saver. The new API introduced some custom hooks to perform certain actions.</p>
<p>In previous versions, for example, if I had to get the currentName of the active screen, I had to create some helpers to do that for me pretty much like the following.</p>
<pre><code class="language-jsx">export function getCurrentRouteName(): string | null {
const tag = "[getCurrentRouteNameSync] "
const navState = getStore().getState().nav
const currentRoute = getActiveRouteState(navState)
console.log(tag + " currentRoute &gt; ", currentRoute)
return currentRoute &amp;&amp; currentRoute.routeName ? currentRoute.routeName : null
}
</code></pre>
<p>The hooks API helps me avoid all these things and makes it easier for me to access the Navigation API with one single line using a hook.</p>
<p>Now I can easily get the RouteName using <code>useRoute</code> Hook.</p>
<pre><code class="language-jsx">import { useRoute } from "@react-navigation/native"
const AboutScreen = ({ navigation }) =&gt; {
const route = useRoute()
return (
&lt;View
style={{
justifyContent: "space-around",
flex: 1,
alignItems: "center",
}}
&gt;
{/*    Display the RouteName here */}
&lt;Text style={styles.title}&gt;{route.name}&lt;/Text&gt;
&lt;/View&gt;
)
}
</code></pre>
<p>We can do the same thing with the <code>useNavigationState</code> Hook. It gives us access to the navigation state.</p>
<pre><code class="language-js">const navigationState = useNavigationState(state =&gt; state)
let index = navigationState.index
let routes = navigationState.routes.length
console.log(index)
console.log(routes)
</code></pre>
<p>React-navigation offers other hooks as well, for example:</p>
<ul>
<li><code>useFocuseEffect</code> : a side effect hook that, when the screens are loaded, returns the focused screen</li>
<li><code>useLinking</code>: handles deepLinking</li>
</ul>
<p>I highly recommend that you <a href="https://reactnavigation.org/docs/use-navigation/">check them out</a>.</p>
<h2 id="wrappingup">Wrapping Up</h2>
<p>The new react-navigation API definitely moves from static to dynamic. It’s a great direction that will absolutely change the way we handle navigation in React Native. Dynamic routes were a major request by react-navigation users, and this new way will help us create a better user navigation experience.</p>
<h3 id="youcanfindmorecontentaboutreactnativehere">You can find more content about <a href="https://saidhayani.com/">React Native here</a></h3>
<blockquote>
<p>Thanks for reading</p>
</blockquote>
<ul>
<li><a href="https://twitter.com/SaidHYN">Twitter</a></li>
<li><a href="https://github.com/hayanisaid">GitHub</a></li>
<li><a href="https://webege.us16.list-manage.com/subscribe?u=311846a57d1e1a666287ad128&amp;id=2b386b2ebb">Join the mail-list</a></li>
</ul>
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
