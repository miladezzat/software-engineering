---
card: "https://cdn-media-1.freecodecamp.org/images/1*gQEm5r-73VpwmSrHYRi0AQ.jpeg"
tags: [React Native]
description: by Spencer Carli
author: "Milad E. Fahmy"
title: "How to make your React Native app respond gracefully when the keyboard pops up"
created: "2021-08-15T19:53:00+02:00"
modified: "2021-08-15T19:53:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-react tag-javascript tag-tech tag-animation ">
<header class="post-full-header">
<h1 class="post-full-title">How to make your React Native app respond gracefully when the keyboard pops up</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*gQEm5r-73VpwmSrHYRi0AQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*gQEm5r-73VpwmSrHYRi0AQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*gQEm5r-73VpwmSrHYRi0AQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*gQEm5r-73VpwmSrHYRi0AQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*gQEm5r-73VpwmSrHYRi0AQ.jpeg" alt="How to make your React Native app respond gracefully when the keyboard pops up">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Spencer Carli</p>
<h1 id="how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up">How to make your React Native app respond gracefully when the keyboard pops up</h1>
<p>When you’re working with React Native apps, a common problem is that the keyboard will pop up and hide text inputs when you focus on them. Something like this:</p>
<p>There are a few ways you can avoid this. Some are simple, some less so. Some can be customized, others can’t. Today I’ll show you 3 different ways you can avoid the keyboard in React Native.</p>
<blockquote><em>I’ve put all the source code for this tutorial <a href="https://github.com/spencercarli/react-native-keyboard-avoidance-examples" rel="noopener">on Github</a>.</em></blockquote>
<h4 id="keyboardavoidingview">KeyboardAvoidingView</h4>
<p>The most simple solution, and the easiest to install, is <a href="https://facebook.github.io/react-native/docs/keyboardavoidingview.html" rel="noopener">KeyboardAvoidingView</a>. It’s a core component but it’s also pretty simple in what it does.</p>
<p>You can take the <a href="https://gist.github.com/spencercarli/8acb7208090f759b0fc2fda3394796f1" rel="noopener">base code</a>, which has the keyboard covering the inputs, and update that so that the inputs are no longer covered. The first thing you have to do is replace the container <code>View</code> with the <code>KeyboardAvoidingView</code> and then add a <code>behavior</code> prop to it. If you look at the documentation you’ll see that it accepts 3 different values — <em>height, padding, position</em>. I’ve found that <em>padding</em> works in the most predictable manner. So that is what I’ll use.</p>
import { View, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import logo from './logo.png';
const Demo = () =&gt; {
return (
&lt;KeyboardAvoidingView
style={styles.container}
behavior="padding"
&gt;
&lt;Image source={logo} style={styles.logo} /&gt;
&lt;TextInput
placeholder="Email"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Username"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Password"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Confirm Password"
style={styles.input}
/&gt;
&lt;View style={{ height: 60 }} /&gt;
&lt;/KeyboardAvoidingView&gt;
);
};
export default Demo;</code></pre>
<figcaption>KeyboardAvoidingView.js</figcaption>
</figure>
<p>This gives us the following result. It’s not perfect but for barely any work, it’s quite good.</p>
<p>One thing to note is that on line 30 you’ll see a <code>View</code> that has a height set to 60px. I found that the keyboard avoiding view doesn’t quite work with the last element, and setting padding/margin didn’t work. So I added a new element to “bump” everything up a few pixels.</p>
<p>The image at the top gets pushed out of the view when using this simple implementation. I’ll show you how you can fix that at the end.</p>
<blockquote><em>Android users: I’ve found this to be the best/only option. By adding <code>android:windowSoftInputMode="adjustResize"</code> to your AndroidManifest.xml the operating system will take care of most of the work for you and the KeyboardAvoidingView will take care of the rest. <a href="https://gist.github.com/spencercarli/e1b9575c1c8845c2c20b86415dfba3db#file-androidmanifest-xml-L23" rel="noopener">Example AndroidManifest.xml</a>. The remainder of this article likely won’t apply to you.</em></blockquote>
<h4 id="keyboard-aware-scrollview">Keyboard Aware ScrollView</h4>
<p>The next option is the <a href="https://github.com/APSL/react-native-keyboard-aware-scroll-view" rel="noopener">react-native-keyboard-aware-scroll-view</a> which gives you a lot of bang for your buck. Behind the scenes it’s using a ScrollView or ListView to handle everything (depending on the component you choose), which makes the scrolling interaction pretty seamless. The other major benefit to this package is that it will scroll to the input that is in focus, which gives the user a nice experience.</p>
<p>Usage is also very easy — you just need to swap out the container <code>View</code>, again starting with the <a href="https://gist.github.com/spencercarli/8acb7208090f759b0fc2fda3394796f1" rel="noopener">base code</a>, and set a few options. Here’s the code, then I’ll describe it.</p>
import { View, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import logo from './logo.png';
const Demo = () =&gt; {
return (
&lt;KeyboardAwareScrollView
style={{ backgroundColor: '#4c69a5' }}
resetScrollToCoords={{ x: 0, y: 0 }}
contentContainerStyle={styles.container}
scrollEnabled={false}
&gt;
&lt;Image source={logo} style={styles.logo} /&gt;
&lt;TextInput
placeholder="Email"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Username"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Password"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Confirm Password"
style={styles.input}
/&gt;
&lt;/KeyboardAwareScrollView&gt;
);
};
export default Demo;</code></pre>
<figcaption>KeyboardAwareScrollView.js</figcaption>
</figure>
<p>First off you want to set the <em>backgroundColor</em> of the ScrollView that way (if you were to re-enable scrolling) the backgroundColor is always the same. Next you want to tell the component where the default position is so that, once the keyboard is closed, it goes back to that spot — by omitting this prop the view could get stuck at the top after closing the keyboard, like this.</p>
<p>After the <em>resetScrollToCoords </em>prop you set the <em>contentContainerStyle — </em>this essentially replaces the containing <code>View</code> styles you had before. The final thing I’m doing is disabling the scrollview from user interaction. This may not always make sense for your UI (such as an interface where a user is editing many profile fields) but for this one it does, it doesn’t make much sense to allow the user to manually scroll because there is nothing to scroll to.</p>
<p>Combining these props together you get the following result, which works quite well.</p>
<h4 id="keyboard-module">Keyboard Module</h4>
<p>This is by far the most manual option but also gives you the most control. You’ll be using the Animated library to help give smooth interactions like you saw before.</p>
<p>The Keyboard module, which isn’t documented on the React Native site, allows you to listen keyboard events emitted from the device. The events you’ll use are <em>keyboardWillShow</em> and <em>keyboardWillHide</em>, which return the length of time the animation will take and the ending position of the keyboard (among other information).</p>
<blockquote>If you’re on Android you’ll want to use keyboardDidShow and keyboardDidHide instead.</blockquote>
<p>When the <em>keyboardWillShow</em> event is emitted you’ll set an animated variable to the final height of the keyboard and have it animate for the same duration as the keyboard sliding animation. You then use this animated value to set padding on the bottom of the container to bump all of the content up.</p>
<p>I’ll show code in a moment, but doing what I described above leaves us with this experience.</p>
<p>I want to fix that image this time. To do so you’ll use an animated value to manage the height of the image, which you’ll adjust when the keyboard is opened. Here’s the code.</p>
import { View, TextInput, Image, Animated, Keyboard } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './styles';
import logo from './logo.png';
class Demo extends Component {
constructor(props) {
super(props);
this.keyboardHeight = new Animated.Value(0);
this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
}
componentWillMount () {
this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
}
componentWillUnmount() {
this.keyboardWillShowSub.remove();
this.keyboardWillHideSub.remove();
}
keyboardWillShow = (event) =&gt; {
Animated.parallel([
Animated.timing(this.keyboardHeight, {
duration: event.duration,
toValue: event.endCoordinates.height,
}),
Animated.timing(this.imageHeight, {
duration: event.duration,
toValue: IMAGE_HEIGHT_SMALL,
}),
]).start();
};
keyboardWillHide = (event) =&gt; {
Animated.parallel([
Animated.timing(this.keyboardHeight, {
duration: event.duration,
toValue: 0,
}),
Animated.timing(this.imageHeight, {
duration: event.duration,
toValue: IMAGE_HEIGHT,
}),
]).start();
};
render() {
return (
&lt;Animated.View style={[styles.container, { paddingBottom: this.keyboardHeight }]}&gt;
&lt;Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} /&gt;
&lt;TextInput
placeholder="Email"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Username"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Password"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Confirm Password"
style={styles.input}
/&gt;
&lt;/Animated.View&gt;
);
}
};
export default Demo;</code></pre>
<figcaption>KeyboardModule.js</figcaption>
</figure>
<p>There’s certainly a lot more to it than any of the other solutions. Rather than a normal <code>View</code> or <code>Image</code> you’re using an <code>Animated.View</code> and <code>Animated.Image</code> so that the animated values can be leveraged. The fun part is really in the <em>keyboardWillShow</em> and <em>keyboardWillHide</em> functions where the animated values are changing.</p>
<p>What’s happening there is that two animated values are changing in parallel which are then being used to drive the UI. That leaves you with this.</p>
<p>It’s a fair amount more code but it’s pretty slick. You have a lot of options for what you can do and can really customize the interaction to your hearts content.</p>
<h4 id="combining-options">Combining Options</h4>
<p>If you want to save some code you can combine a few options, which is what I tend to do. For example by combining option 1 and 3 you only have to worry about managing and animating the height of the image.</p>
<p>The code isn’t much less than the source of option 3 but as a UI grows in complexity it can help you out a bit.</p>
import { View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import logo from './logo.png';
class Demo extends Component {
constructor(props) {
super(props);
this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
}
componentWillMount () {
this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
}
componentWillUnmount() {
this.keyboardWillShowSub.remove();
this.keyboardWillHideSub.remove();
}
keyboardWillShow = (event) =&gt; {
Animated.timing(this.imageHeight, {
duration: event.duration,
toValue: IMAGE_HEIGHT_SMALL,
}).start();
};
keyboardWillHide = (event) =&gt; {
Animated.timing(this.imageHeight, {
duration: event.duration,
toValue: IMAGE_HEIGHT,
}).start();
};
render() {
return (
&lt;KeyboardAvoidingView
style={styles.container}
behavior="padding"
&gt;
&lt;Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} /&gt;
&lt;TextInput
placeholder="Email"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Username"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Password"
style={styles.input}
/&gt;
&lt;TextInput
placeholder="Confirm Password"
style={styles.input}
/&gt;
&lt;/KeyboardAvoidingView&gt;
);
}
};
export default Demo;</code></pre>
<figcaption>Combo.js</figcaption>
</figure>
<p>Each implementation has its pros and cons — you’ll have to choose the most appropriate one given the user experience you’re aiming for.</p>
<blockquote>Are you interested in learning more about using React Native to build high quality mobile apps? <a href="http://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter" rel="noopener">Sign up for my free React Native course</a>!</blockquote>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
