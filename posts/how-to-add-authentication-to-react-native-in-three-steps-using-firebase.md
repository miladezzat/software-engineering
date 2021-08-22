---
card: "/images/default.jpg"
tags: [Firebase]
description: "Authentication allows us to secure our apps, or limit access "
author: "Milad E. Fahmy"
title: "How to Add Authentication to React Native in Three Steps Using Firebase"
created: "2021-08-16T11:27:48+02:00"
modified: "2021-08-16T11:27:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-firebase tag-authentication tag-100daysofcode tag-technology tag-programing tag-react-native tag-javascript tag-firebase-cloud-functions tag-coding tag-tech tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">How to Add Authentication to React Native in Three Steps Using&nbsp;Firebase</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/rn-firebase-auth.png 300w,
/news/content/images/size/w600/2020/04/rn-firebase-auth.png 600w,
/news/content/images/size/w1000/2020/04/rn-firebase-auth.png 1000w,
/news/content/images/size/w2000/2020/04/rn-firebase-auth.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/rn-firebase-auth.png" alt="How to Add Authentication to React Native in Three Steps Using&nbsp;Firebase">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>That's just one example of how authentication can be in your app. Today we will add authentication to a React Native app using Firebase.</p>
<h2 id="1installingreactnativefirebase">1 Installing react-native-firebase</h2>
<p>The first thing we do is install and initialize Firebase inside our app. In React Native we need to use a Firebase Container for React Native. We are going to use <a href="https://github.com/invertase/react-native-firebase">react-native-firebase</a>.</p>
<p>If you are about to start a new React Native app from scratch and you would like to use Firebase, you are lucky - you can install react-native-firebase pre-integrated using the React Native CLI.</p>
<pre><code class="language-shell">//
npx @react-native-community/cli init --template=@react-native-firebase/template authenticationFirebase
//** source: https://invertase.io/oss/react-native-firebase/quick-start/new-project
</code></pre>
<p>Then just install the pod for iOS by running the following command inside the root directory of your app.</p>
<pre><code class="language-shell">cd ios &amp;&amp; pod install
</code></pre>
<p>If you are having issues installing a new project with Firebase please refer to <a href="https://invertase.io/oss/react-native-firebase/quick-start/new-project">react-native-firebase docs</a></p>
<h3 id="addingreactnativefirebasetoanexistingproject">Adding react-native-firebase to an existing&nbsp;project</h3>
<p>Install the <code>react-native-firebase</code> package using yarn or npm</p>
<pre><code class="language-shell"> yarn add @react-native-firebase/app
</code></pre>
<p>or:</p>
<pre><code class="language-shell"> npm install @react-native-firebase/app
</code></pre>
<p>Then install pods for iOS.</p>
<p><code>shell cd ios &amp;&amp; pod install</code></p>
<h3 id="runningtheapp">Running the app</h3>
<p>For iOS, there are two ways to do it: I personally use Xcode, as it gives me a clear idea if something went wrong and the build failed.<br>
<img src="build-xcode.gif" alt="Xcode"></p>
<p>Always make sure the package is running - hit <code>yarn start</code> to start the app.</p>
<p>The second way to run the app on iOS is running the react-native run-ios command - and that's it.</p>
<h2 id="addingfirebasecredentials">Adding firebase credentials</h2>
<p>This step requires us to create a new project in <a href="https://console.firebase.google.com/">the Firebase console&nbsp;</a>.</p>
<p>After creating a new project on the dashboard page select <strong>add Firebase to iOS app</strong>. This will show you the steps to add credentials to iOS like below.</p>
<p>It consists of a few steps&nbsp;:</p>
<ul>
<li>
<p>Download the <code>GoogleService-info.plist</code> file and put it inside the iOS folder within your project.<br>
<img src="https://www.freecodecamp.org/news/content/images/2020/04/add-firebase-ios.png" alt="add-firebase-ios"></p>
</li>
<li>
<p>Initialize Firebase</p>
</li>
</ul>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/04/initialize-firebase.png" alt="initialize-firebase"></p>
<h2 id="forandroid">For Android</h2>
<p>Android has a different setup for Firebase. In project settings in the Firebase console select <strong>add Firebase to Android</strong>.<br>
<img src="https://www.freecodecamp.org/news/content/images/2020/04/firebase-to-android.png" alt="firebase-to-android"></p>
<p>You can put any name you like in the app name input - just make sure it conforms to the Firebase requirements. Then click <strong>Register</strong>.</p>
<p>After that, you need to download the <code>google-services.json</code> file and put it within the android/app folder.</p>
<p>Then the next step is to initialize the Android SDK.<br>
<img src="https://www.freecodecamp.org/news/content/images/2020/04/add-android-sdk.png" alt="add-android-sdk"></p>
<p>The last step is to apply the Firebase plugin inside: <code>android/app/build.gradle</code>&nbsp;.</p>
<pre><code class="language-shell">apply plugin: 'com.google.gms.google-services'
</code></pre>
<p>If you have any issues running the steps above you can always refer to the <a href="https://firebase.google.com/docs">Firebase docs</a> or <a href="https://rnfirebase.io/">react-native-firebase</a> websites.</p>
<p>Now that we are done with the integration, the next step is to implement Firebase functions to create users and sign in in React Native.</p>
<h2 id="addingsigninlogin">Adding SignIn,&nbsp;Login</h2>
<p>This phase is simple: just some React and JavaScript code to call Firebase functions. I'm going to create a simple UI for Login and SignUp (this is not necessary for this tutorial so you can skip this step).</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/04/loginComponent.gif" alt="loginComponent"></p>
<blockquote>
<p>I will put the full source code at the end of article *</p>
</blockquote>
<p>We will use the <code>createUserWithEmailAndPassword</code> function to sign up for a new user. I already implemented all the validation on the form - we just need to call this function to create a user.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/04/form-validation.gif" alt="form-validation"></p>
<p>When the user presses the Continue button, <code>__doSignUp</code> will be called and the code looks like this:</p>
<pre><code class="language-jsx">const __doSignUp = () =&gt; {
if (!email) {
setError("Email required *")
setValid(false)
return
} else if (!password &amp;&amp; password.trim() &amp;&amp; password.length &gt; 6) {
setError("Weak password, minimum 5 chars")
setValid(false)
return
} else if (!__isValidEmail(email)) {
setError("Invalid Email")
setValid(false)
return
}
__doCreateUser(email, password)
}
const __doCreateUser = async (email, password) =&gt; {
try {
let response = await auth().createUserWithEmailAndPassword(email, password)
if (response) {
console.log(tag, "?", response)
}
} catch (e) {
console.error(e.message)
}
}
</code></pre>
<p>Make sure you installed <code>@react-native-firebase/auth</code>to be able to call <code>auth().createUserWithEmailAndPassword(email, password)</code></p>
<pre><code class="language-jsx">// import auth
import auth from "@react-native-firebase/auth"
</code></pre>
<p>The function that creates a new user in Firebase looks like this:</p>
<pre><code class="language-jsx">const __doCreateUser = async (email, password) =&gt;{
try {
let response =  await auth().createUserWithEmailAndPassword(email, password);
if(response){
console.log(tag,"?",response)
}
} catch (e) {
console.error(e.message);
}
</code></pre>
<p>If the function throws an error, make sure to enable the email / password method in the authentication section in the Firebase console.<br>
<img src="https://www.freecodecamp.org/news/content/images/2020/04/enable-email-auth.png" alt="enable-email-auth"></p>
<p>If everything went well, and the data entered (email, password) is valid, an alert will show up. If you check the Authentication section in the Firebase console you will notice that a new user has been created.<br>
<img src="https://www.freecodecamp.org/news/content/images/2020/04/signUpSuccess.gif" alt="signUpSuccess"></p>
<p>Here is the source code of <code>SignInComponent</code>.</p>
<pre><code class="language-jsx">const SigInComponent = () =&gt; {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [fetching, setFetching] = useState(false)
const [error, setError] = useState("")
const [isValid, setValid] = useState(true)
const __doSignUp = () =&gt; {
if (!email) {
setError("Email required *")
setValid(false)
return
} else if (!password &amp;&amp; password.trim() &amp;&amp; password.length &gt; 6) {
setError("Weak password, minimum 5 chars")
setValid(false)
return
} else if (!__isValidEmail(email)) {
setError("Invalid Email")
setValid(false)
return
}
__doCreateUser(email, password)
}
const __doCreateUser = async (email, password) =&gt; {
try {
let response = await auth().createUserWithEmailAndPassword(
email,
password
)
if (response &amp;&amp; response.user) {
Alert.alert("Success ✅", "Account created successfully")
}
} catch (e) {
console.error(e.message)
}
}
return (
&lt;SafeAreaView style={styles.containerStyle}&gt;
&lt;View style={{ flex: 0.2 }}&gt;
{!!fetching &amp;&amp; &lt;ActivityIndicator color={blue} /&gt;}
&lt;/View&gt;
&lt;View style={styles.headerContainerStyle}&gt;
&lt;Text style={styles.headerTitleStyle}&gt; Sign Up &lt;/Text&gt;
&lt;/View&gt;
&lt;View style={styles.formContainerStyle}&gt;
&lt;TextInput
label={"Email"}
autoCapitalize={false}
keyboardType="email-address"
style={styles.textInputStyle}
placeholder="Mail address"
onChangeText={text =&gt; {
setError
setEmail(text)
}}
error={isValid}
/&gt;
&lt;TextInput
label={"Password"}
secureTextEntry
autoCapitalize={false}
style={styles.textInputStyle}
selectionColor={blue}
placeholder="Password"
error={isValid}
onChangeText={text =&gt; setPassword(text)}
/&gt;
&lt;/View&gt;
{error ? (
&lt;View style={styles.errorLabelContainerStyle}&gt;
&lt;Text style={styles.errorTextStyle}&gt;{error}&lt;/Text&gt;
&lt;/View&gt;
) : null}
&lt;View style={styles.signInButtonContainerStyle}&gt;
&lt;TouchableHighlight
style={styles.signInButtonStyle}
onPress={__doSignUp}
underlayColor={blue}
&gt;
&lt;View
style={{
flexDirection: "row",
justifyContent: "space-around",
}}
&gt;
&lt;Text style={styles.signInButtonTextStyle}&gt;Continue&lt;/Text&gt;
&lt;/View&gt;
&lt;/TouchableHighlight&gt;
&lt;/View&gt;
&lt;/SafeAreaView&gt;
)
}
</code></pre>
<p>For <code>LoginComponent</code> it’s mostly the same the only thing we need to change is we use <code>signInWithEmailAndPassword</code> method instead.</p>
<pre><code class="language-jsx">const __doSingIn = async (email, password) =&gt; {
try {
let response = await auth().signInWithEmailAndPassword(email, password)
if (response &amp;&amp; response.user) {
Alert.alert("Success ✅", "Authenticated successfully")
}
} catch (e) {
console.error(e.message)
}
}
</code></pre>
<p>![loginSuccess](loginSuccess.gif</p>
<p>And the authentication has been successfully implemented in our app ??</p>
<p>Just one last thing: if we have to verify if the user is already logged in, we need to display something else instead of the Login or SignIn screens. For example, we can display the Home screen.</p>
<p>We can use a Firebase module to verify a session. It can be imported from the auth module.</p>
<pre><code class="language-jsx">import auth, { firebase } from "@react-native-firebase/auth"
</code></pre>
<pre><code class="language-jsx"> componentDidMount() {
//  this.register("said1292@gmail.com", "123456");
this.__isTheUserAuthenticated();
}
__isTheUserAuthenticated = () =&gt; {
let user = firebase.auth().currentUser.uid;
if (user) {
console.log(tag,  user);
this.setState({ authenticated: true });
} else {
this.setState({ authenticated: false });
}
};
</code></pre>
<p>And we can change the UI based on if the user is authenticated or not. We can display user info by just using the same method.</p>
<pre><code class="language-jsx">firebase.auth().currentUser.email // said543@gmail.com
</code></pre>
<p>And to logout, you can just call <code>await firebase.auth().signOut()</code>;</p>
<p>I’m sure integrating navigation like <a href="https://reactnavigation.org/">react-navigation </a> would be awesome, but it was not our focus in this article. So feel free to add navigation so you can just navigate based on the user status.</p>
<p>Feel free to check out the full source code ?on <a href="https://github.com/hayanisaid/react-native-authentication-firebase">GitHub</a></p>
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
