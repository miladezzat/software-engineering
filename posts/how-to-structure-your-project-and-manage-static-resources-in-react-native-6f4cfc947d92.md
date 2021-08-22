---
card: "https://cdn-media-1.freecodecamp.org/images/0*i9u5ERjY-T2ZgjHX.jpg"
tags: [React Native]
description: "by Khoa Pham"
author: "Milad E. Fahmy"
title: "How to structure your project and manage static resources in React Native"
created: "2021-08-16T11:36:46+02:00"
modified: "2021-08-16T11:36:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-react tag-tech tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to structure your project and manage static resources in React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*i9u5ERjY-T2ZgjHX.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*i9u5ERjY-T2ZgjHX.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*i9u5ERjY-T2ZgjHX.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*i9u5ERjY-T2ZgjHX.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*i9u5ERjY-T2ZgjHX.jpg" alt="How to structure your project and manage static resources in React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
android/
index.js
App.js</code></pre><p>As someone who has worked with native on both Windows Phone, iOS and Android, I find that structuring a project all comes down to separating files by <strong>type</strong> or <strong>feature</strong></p><h3 id="type-vs-feature">type vs feature</h3><p>Separating by type means that we organise files by their type. If it is a component, there are container and presentational files. If it is Redux, there are action, reducer, and store files. If it is view, there are JavaScript, HTML, and CSS files.</p><h4 id="group-by-type">Group by type</h4><pre><code>redux
actions
store
reducers
components
container
presentational
view
javascript
html
css</code></pre><p>This way, we can see the type of each file, and easily run a script toward a certain file type. This is general for all projects, but it does not answer the question “what is this project about?” Is it news application? Is it a loyalty app? Is it about nutrition tracking?</p><p>Organising files by type is for a machine, not for a human. Many times we work on a feature, and finding files to fix in multiple directories is a hassle. It’s also a pain if we plan to make a framework out of our project, as files are spread across many places.</p><h4 id="group-by-feature">Group by feature</h4><p>A more reasonable solution is to organise files by feature. Files related to a feature should be placed together. And <a href="https://medium.com/@JeffLombardJr/organizing-tests-in-jest-17fc431ff850" rel="noopener">test files</a> should stay close to the source files. Check out <a href="https://medium.com/@JeffLombardJr/organizing-tests-in-jest-17fc431ff850" rel="noopener">this article</a> to learn more.</p><p>A feature can be related to login, sign up, onboarding, or a user’s profile. A feature can contain sub-features as long as they belong to the same flow. If we wanted to move the sub feature around, it would be easy, as all related files are already grouped together.</p><p>My typical project structure based on features looks like this:</p><pre><code>index.js
App.js
ios/
android/
src
screens
login
LoginScreen.js
LoginNavigator.js
onboarding
OnboardingNavigator
welcome
WelcomeScreen.js
term
TermScreen.js
notification
NotificationScreen.js
main
MainNavigator.js
news
NewsScreen.js
profile
ProfileScreen.js
search
SearchScreen.js
library
package.json
components
ImageButton.js
RoundImage.js
utils
moveToBottom.js
safeArea.js
networking
API.js
Auth.js
res
package.json
strings.js
colors.js
palette.js
fonts.js
images.js
images
logo@2x.png
logo@3x.png
button@2x.png
button@3x.png
scripts
images.js
clear.js</code></pre><p>Besides the traditional files <code>App.js</code> and <code>index.js</code> and the <code>ios1</code> and <code>android</code> folders, I put all the source files inside the <code>src</code> folder. Inside <code>src</code> I have <code>res</code> for resources, <code>library</code> for common files used across features, and <code>screens</code> for a screen of content.</p><h4 id="as-few-dependencies-as-possible">As few dependencies as possible</h4><p>Since React Native is heavily dependent on tons of dependencies, I try to be pretty aware when adding more. In my project I use just <code>react-navigation</code> for navigation. And I’m not a fan of <code>redux</code> as it adds unneeded complexity. Only add a dependency when you really need it, otherwise you are just setting yourself up for more trouble than value.</p><p>The thing I like about React is the components. A component is where we define view, style and behavior. React has inline style — it’s like using JavaScript to define script, HTML and CSS. This fits the feature approach we are aiming for. That’s why I don’t use <a href="https://github.com/styled-components/styled-components" rel="noopener">styled-components</a>. Since styles are just JavaScript objects, we can just share comment styles in <code>library</code> .</p><h3 id="src">src</h3><p>I like Android a lot, so I name <code>src</code> and <code>res</code> to match its folder conventions.</p><p><code>react-native init</code> sets up babel for us. But for a typical JavaScript project, it’s good to organise files in the <code>src</code> folder. In my <code>electron.js</code> application <a href="https://github.com/onmyway133/IconGenerator/tree/master/src" rel="noopener">IconGenerator</a>, I put the source files inside the <code>src</code> folder. This not only helps in terms of organising, but also helps babel transpile the entire folder at once. Just a command and I have the files in <code>src</code> transpiled to <code>dist</code> in a blink.</p><pre><code class="language-bash">babel ./src --out-dir ./dist --copy-files</code></pre><h3 id="screen">Screen</h3><p>React is based around components. Yup. There are <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="noopener">container and presentational components</a>, but we can compose components to build more complex components. They usually end in showing in the full screen. It is called <code>Page</code> in Windows Phone, <code>ViewController</code> in iOS and <code>Activity</code> in Android. The React Native guide mentions <a href="https://facebook.github.io/react-native/docs/navigation" rel="noopener">screen</a> very often as something that covers the entire space:</p><blockquote>Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator.</blockquote><h4 id="index-js-or-not">index.js or not?</h4><p>Each screen is considered the entry point for each feature. You can rename the <code>LoginScreen.js</code> to <code>index.js</code> by leveraging the Node <a href="https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8" rel="noopener">module</a> feature:</p><blockquote>Modules don’t have to be files. We can also create a <code>find-me</code> folder under <code>node_modules</code> and place an <code>index.js</code> file in there. The same <code>require('find-me')</code> line will use that folder’s <code>index.js</code> file</blockquote><p>So instead of <code>import LoginScreen from './screens/LoginScreen'</code> , we can just do <code>import LoginScreen from './screens'</code>.</p><p>Using <code>index.js</code> results in encapsulation and provides a public interface for the feature. This is all personal taste. I myself prefer explicit naming for a file, hence the name <code>LoginScreen.js</code>.</p><h3 id="navigator">Navigator</h3><p><a href="https://github.com/react-navigation/react-navigation" rel="noopener">react-navigation</a> seems to be the most popular choice for handling navigation in a React Native app. For a feature like onboarding, there are probably many screens managed by a stack navigation, so there is <code>OnboardingNavigator</code> .</p><p>You can think of Navigator as something that groups sub screens or features. Since we group by feature, it’s reasonable to place Navigator inside the feature folder. It basically looks like this:</p><pre><code class="language-jsx">import { createStackNavigator } from 'react-navigation'
import Welcome from './Welcome'
import Term from './Term'
const routeConfig = {
Welcome: {
screen: Welcome
},
Term: {
screen: Term
}
}
const navigatorConfig = {
navigationOptions: {
header: null
}
}
export default OnboardingNavigator = createStackNavigator(routeConfig, navigatorConfig)</code></pre><h3 id="library">library</h3><p>This is the most controversial part of structuring a project. If you don’t like the name <code>library</code>, you can name it <code>utilities</code>, <code>common</code>, <code>citadel</code> , <code>whatever</code>…</p><p>This is not meant for homeless files, but it is where we place common utilities and components that are used by many features. Things like atomic components, wrappers, quick fixes function, networking stuff, and login info are used a lot, and it’s hard to move them to a specific feature folder. Sometimes we just need to be practical and get the work done.</p><p>In React Native, we often need to implement a button with an image background in many screens. Here is a simple one that stays inside <code>library/components/ImageButton.js</code> . The <code>components</code> folder is for reusable components, sometimes called <a href="https://medium.com/joeydinardo/a-brief-look-at-atomic-components-39cbe71d38b5" rel="noopener">atomic components</a>. According to React naming conventions, the first letter should be uppercase.</p><pre><code class="language-jsx">import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import images from 'res/images'
import colors from 'res/colors'
export default class ImageButton extends React.Component {
render() {
return (
&lt;TouchableOpacity style={styles.touchable} onPress={this.props.onPress}&gt;
&lt;View style={styles.view}&gt;
&lt;Text style={styles.text}&gt;{this.props.title}&lt;/Text&gt;
&lt;/View&gt;
&lt;Image
source={images.button}
style={styles.image} /&gt;
&lt;/TouchableOpacity&gt;
)
}
}
const styles = StyleSheet.create({
view: {
position: 'absolute',
backgroundColor: 'transparent'
},
image: {
},
touchable: {
alignItems: 'center',
justifyContent: 'center'
},
text: {
color: colors.button,
fontSize: 18,
textAlign: 'center'
}
})</code></pre><p>And if we want to place the button at the bottom, we use a utility function to prevent code duplication. Here is <code>library/utils/moveToBottom.js</code>:</p><pre><code class="language-jsx">import React from 'react'
import { View, StyleSheet } from 'react-native'
function moveToBottom(component) {
return (
&lt;View style={styles.container}&gt;
{component}
&lt;/View&gt;
)
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'flex-end',
marginBottom: 36
}
})
export default moveToBottom</code></pre><h4 id="use-package-json-to-avoid-relative-path">Use package.json to avoid relative path</h4><p>Then somewhere in the <code>src/screens/onboarding/term/Term.js</code> , we can import by using relative paths:</p><pre><code class="language-js">import moveToBottom from '../../../../library/utils/move'
import ImageButton from '../../../../library/components/ImageButton'</code></pre><p>This is a big red flag in my eyes. It’s error prone, as we need to calculate how many <code>..</code> we need to perform. And if we move feature around, all of the paths need to be recalculated.</p><p>Since <code>library</code> is meant to be used many places, it’s good to reference it as an absolute path. In JavaScript there are usually 1000 libraries to a single problem. A quick search on Google reveals tons of libraries to tackle this issue. But we don’t need another dependency as this is extremely easy to fix.</p><p>The solution is to turn <code>library</code> into a <code>module</code> so <code>node</code> can find it. Adding <code>package.json</code> to any folder makes it into a Node <code>module</code> . Add <code>package.json</code> inside the <code>library</code> folder with this simple content:</p><pre><code class="language-json">{
"name": "library",
"version": "0.0.1"
}</code></pre><p>Now in <code>Term.js</code> we can easily import things from <code>library</code> because it is now a <code>module</code>:</p><pre><code class="language-jsx">import React from 'react'
import { View, StyleSheet, Image, Text, Button } from 'react-native'
import strings from 'res/strings'
import palette from 'res/palette'
import images from 'res/images'
import ImageButton from 'library/components/ImageButton'
import moveToBottom from 'library/utils/moveToBottom'
export default class Term extends React.Component {
render() {
return (
&lt;View style={styles.container}&gt;
&lt;Text style={styles.heading}&gt;{strings.onboarding.term.heading.toUpperCase()}&lt;/Text&gt;
{
moveToBottom(
&lt;ImageButton style={styles.button} title={strings.onboarding.term.button.toUpperCase()} /&gt;
)
}
&lt;/View&gt;
)
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center'
},
heading: {...palette.heading, ...{
marginTop: 72
}}
})</code></pre><h3 id="res">res</h3><p>You may wonder what <code>res/colors</code>, <code>res/strings</code> , <code>res/images</code> and <code>res/fonts</code> are in the above examples. Well, for front end projects, we usually have components and style them using fonts, localised strings, colors, images and styles. JavaScript is a very dynamic language, and it’s easy to use stringly types everywhere. We could have a bunch of <code>#00B75D</code> <code>color</code> across many files, or <code>Fira</code> as a <code>fontFamily</code> in many <code>Text</code> components. This is error-prone and hard to refactor.</p><p>Let’s encapsulate resource usage inside the <code>res</code> folder with safer objects. They look like the examples below:</p><p><strong>res/colors</strong></p><pre><code class="language-js">const colors = {
title: '#00B75D',
text: '#0C222B',
button: '#036675'
}
export default colors</code></pre><p><strong>res/strings</strong></p><pre><code class="language-js">const strings = {
onboarding: {
welcome: {
heading: 'Welcome',
text1: "What you don't know is what you haven't learn",
text2: 'Visit my GitHub at https://github.com/onmyway133',
button: 'Log in'
},
term: {
heading: 'Terms and conditions',
button: 'Read'
}
}
}
export default strings</code></pre><p><strong>res/fonts</strong></p><pre><code class="language-js">const fonts = {
title: 'Arial',
text: 'SanFrancisco',
code: 'Fira'
}
export default fonts</code></pre><p><strong>res/images</strong></p><pre><code class="language-js">const images = {
button: require('./images/button.png'),
logo: require('./images/logo.png'),
placeholder: require('./images/placeholder.png')
}
export default images</code></pre><p>Like <code>library</code> , <code>res</code> files can be access from anywhere, so let’s make it a <code>module</code> . Add <code>package.json</code> to the <code>res</code> folder:</p><pre><code>{
"name": "res",
"version": "0.0.1"
}</code></pre><p>so we can access resource files like normal modules:</p><pre><code>import strings from 'res/strings'
import palette from 'res/palette'
import images from 'res/images'</code></pre><h4 id="group-colors-images-fonts-with-palette">Group colors, images, fonts with palette</h4><p>The design of the app should be consistent. Certain elements should have the same look and feel so they don’t confuse the user. For example, the heading <code>Text</code> should use one color, font, and font size. The <code>Image</code> component should use the same placeholder image. In React Native, we already use the name <code>styles</code> with <code>const styles = StyleSheet.create({})</code> so let’s use the name <code>palette</code>.</p><p>Below is my simple palette. It defines common styles for heading and <code>Text</code>:</p><h4 id="res-palette">res/palette</h4><pre><code>import colors from './colors'
const palette = {
heading: {
color: colors.title,
fontSize: 20,
textAlign: 'center'
},
text: {
color: colors.text,
fontSize: 17,
textAlign: 'center'
}
}
export default palette</code></pre><p>And then we can use them in our screen:</p><pre><code class="language-js">const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center'
},
heading: {...palette.heading, ...{
marginTop: 72
}}
})</code></pre><p>Here we use the <a href="https://github.com/tc39/proposal-object-rest-spread" rel="noopener">object spread operator</a> to merge <code>palette.heading</code> and our custom style object. This means that we use the styles from <code>palette.heading</code> but also specify more properties.</p><p>If we were to reskin the app for multiple brands, we could have multiple palettes. This is a really powerful pattern.</p><h4 id="generate-images">Generate images</h4><p>You can see that in <code>/src/res/images.js</code> we have properties for each image in the <code>src/res/images</code> folder:</p><pre><code>const images = {
button: require('./images/button.png'),
logo: require('./images/logo.png'),
placeholder: require('./images/placeholder.png')
}
export default images</code></pre><p>This is tedious to do manually, and we have to update if there’s changes in image naming convention. Instead, we can add a script to generate the <code>images.js</code> based on the images we have. Add a file at the root of the project <code>/scripts/images.js</code>:</p><pre><code>const fs = require('fs')
const imageFileNames = () =&gt; {
const array = fs
.readdirSync('src/res/images')
.filter((file) =&gt; {
return file.endsWith('.png')
})
.map((file) =&gt; {
return file.replace('@2x.png', '').replace('@3x.png', '')
})
return Array.from(new Set(array))
}
const generate = () =&gt; {
let properties = imageFileNames()
.map((name) =&gt; {
return `${name}: require('./images/${name}.png')`
})
.join(',\n  ')
const string = `const images = {
${properties}
}
export default images
`
fs.writeFileSync('src/res/images.js', string, 'utf8')
}
generate()</code></pre><p>The cool thing about Node is that we have access to the <code>fs</code> module, which is really good at file processing. Here we simply traverse through images, and update <code>/src/res/images.js</code> accordingly.</p><p>Whenever we add or change images, we can run:</p><pre><code class="language-bash">node scripts/images.js</code></pre><p>And we can also declare the script inside our main <code>package.json</code> :</p><pre><code class="language-json">"scripts": {
"start": "node node_modules/react-native/local-cli/cli.js start",
"test": "jest",
"lint": "eslint *.js **/*.js",
"images": "node scripts/images.js"
}</code></pre><p>Now we can just run <code>npm run images</code> and we get an up-to-date <code>images.js </code>resource file.</p><h4 id="how-about-custom-fonts">How about custom fonts</h4><p>React Native has some <a href="https://medium.com/react-native-training/list-of-available-react-native-fonts-ed78b48bd45e" rel="noopener">custom fonts</a> that may be good enough for your projects. You can also use custom fonts.</p><p>One thing to note is that Android uses the name of the font file, but iOS uses the full name. You can see the full name in Font Book app, or by inspecting in running app</p><pre><code class="language-js">for (NSString* family in [UIFont familyNames]) {
NSLog(@"%@", family);
for (NSString* name in [UIFont fontNamesForFamilyName: family]) {
NSLog(@"Family name:  %@", name);
}
}</code></pre><p>For custom fonts to be registered in iOS, we need to declare <code>UIAppFonts</code> in <code>Info.plist</code> using the file name of the fonts, and for Android, the fonts need to be placed at <code>app/src/main/assets/fonts</code> .</p><p>It is good practice to name the font file the same as full name. React Native is said to dynamically load custom fonts, but in case you get “Unrecognized font family”, then simply add those fonts to target within Xcode.</p><p>Doing this by hand takes time, luckily we have <a href="https://github.com/rnpm/rnpm" rel="noopener">rnpm</a> that can help. First add all the fonts inside <code>res/fonts</code> folder. Then simply declare <code>rnpm</code> in <code>package.json</code> and run <code>react-native link</code> . This should declare <code>UIAppFonts</code> in iOS and move all the fonts into <code>app/src/main/assets/fonts</code> for Android.</p><pre><code>"rnpm": {
"assets": [
"./src/res/fonts/"
]
}</code></pre><p>Accessing fonts by name is error prone, we can create a script similar to what we have done with images to generate a safer accession. Add <code>fonts.js</code> to our <code>scripts</code> folder</p><pre><code>const fs = require('fs')
const fontFileNames = () =&gt; {
const array = fs
.readdirSync('src/res/fonts')
.map((file) =&gt; {
return file.replace('.ttf', '')
})
return Array.from(new Set(array))
}
const generate = () =&gt; {
const properties = fontFileNames()
.map((name) =&gt; {
const key = name.replace(/\s/g, '')
return `${key}: '${name}'`
})
.join(',\n  ')
const string = `const fonts = {
${properties}
}
export default fonts
`
fs.writeFileSync('src/res/fonts.js', string, 'utf8')
}
generate()</code></pre><p>Now you can use custom font via <code>R</code> namespace.</p><pre><code>import R from 'res/R'
const styles = StyleSheet.create({
text: {
fontFamily: R.fonts.FireCodeNormal
}
})</code></pre><h3 id="the-r-namespace">The R namespace</h3><p>This step depends on personal taste, but I find it more organised if we introduce the R namespace, just like how Android does for assets with the generated <a href="http://App resources overview" rel="noopener">R class</a>.</p><blockquote>Once you externalize your app resources, you can access them using resource IDs that are generated in your project’s <code>R</code>class. This document shows you how to group your resources in your Android project and provide alternative resources for specific device configurations, and then access them from your app code or other XML files.</blockquote><p>This way, let’s make a file called <code>R.js</code> in <code>src/res</code>:</p><pre><code class="language-js">import strings from './strings'
import images from './images'
import colors from './colors'
import palette from './palette'
const R = {
strings,
images,
colors,
palette
}
export default R</code></pre><p>And access it in the screen:</p><pre><code class="language-jsx">import R from 'res/R'
render() {
return (
&lt;SafeAreaView style={styles.container}&gt;
&lt;Image
style={styles.logo}
source={R.images.logo} /&gt;
&lt;Image
style={styles.image}
source={R.images.placeholder} /&gt;
&lt;Text style={styles.title}&gt;{R.strings.onboarding.welcome.title.toUpperCase()}&lt;/Text&gt;
)
}</code></pre><p>Replace <code>strings</code> with <code>R.strings</code>, <code>colors</code> with <code>R.colors</code>, and <code>images</code> with <code>R.images</code>. With the R annotation, it is clear that we are accessing static assets from the app bundle.</p><p>This also matches the Airbnb <a href="https://github.com/airbnb/javascript#naming--PascalCase-singleton" rel="noopener">convention</a> for singleton, as our R is now like a global constant.</p><blockquote><a href="https://github.com/airbnb/javascript#naming--PascalCase-singleton" rel="noopener">23.8</a> Use PascalCase when you export a constructor / class / singleton / function library / bare object.</blockquote><pre><code class="language-js">const AirbnbStyleGuide = {
es6: {
},
}
export default AirbnbStyleGuide</code></pre><h3 id="where-to-go-from-here">Where to go from here</h3><p>In this post, I’ve shown you how I think you should structure folders and files in a React Native project. We’ve also learned how to manage resources and access them in a safer manner. I hope you’ve found it useful. Here are some more resources to explore further:</p><ul><li><a href="https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0" rel="noopener">Organizing a React Native Project</a></li><li><a href="https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76" rel="noopener">Structuring projects and naming components in React</a></li><li><a href="https://alligator.io/react/index-js-public-interfaces/" rel="noopener">Using index.js for Fun and Public Interfaces</a></li></ul><p>Since you are here, you may enjoy my other articles</p><ul><li><a href="https://medium.com/react-native-training/fixing-react-native-issues-and-happy-deploy-to-bitrise-fabric-circleci-44da4ab1487b" rel="noopener">Deploying React Native to Bitrise, Fabric, CircleCI</a></li><li><a href="https://medium.com/react-native-training/position-element-at-the-bottom-of-the-screen-using-flexbox-in-react-native-a00b3790ca42" rel="noopener">Position element at the bottom of the screen using Flexbox in React Native</a></li><li><a href="https://codeburst.io/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6" rel="noopener">Setting up ESLint and EditorConfig in React Native projects</a></li><li><a href="https://medium.com/react-native-training/firebase-sdk-with-firestore-for-react-native-apps-in-2018-aa89a67d6934" rel="noopener">Firebase SDK with Firestore for React Native apps in 2018</a></li></ul><p>If you like this post, consider visiting <a href="https://github.com/onmyway133/blog/issues/165" rel="noopener">my other articles </a>and <a href="https://onmyway133.github.io/" rel="noopener">apps</a> ?</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
