---
card: "https://cdn-media-1.freecodecamp.org/images/1*aE75t1iZ3Sbr9l-I6QHf6A.png"
tags: [Firebase]
description: "by Ryan Gordon"
author: "Milad E. Fahmy"
title: "How to integrate Google Login into an Ionic app with Firebase"
created: "2021-08-16T11:41:30+02:00"
modified: "2021-08-16T11:41:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-firebase tag-google tag-authentication tag-security tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to integrate Google Login into an Ionic app with Firebase</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*aE75t1iZ3Sbr9l-I6QHf6A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*aE75t1iZ3Sbr9l-I6QHf6A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*aE75t1iZ3Sbr9l-I6QHf6A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*aE75t1iZ3Sbr9l-I6QHf6A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*aE75t1iZ3Sbr9l-I6QHf6A.png" alt="How to integrate Google Login into an Ionic app with Firebase">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
firebase.auth().onAuthStateChanged( user =&gt; {
if (user){
this.userProfile = user;
} else {
this.userProfile = null;
}
return new Promise((resolve, reject) =&gt; {
this.googlePlus.login({
'webClientId': '5351366995-npuh9q89gaoiagoc4jssqck26gorj7hh.apps.googleusercontent.com',
'offline': true
}).then( res =&gt; {
const googleCredential = firebase.auth.GoogleAuthProvider
.credential(res.idToken);
firebase.auth().signInWithCredential(googleCredential)
.then( response =&gt; {
console.log("Firebase success: " + JSON.stringify(response));
resolve(response)
});
}, err =&gt; {
console.error("Error: ", err)
reject(err);
});
});
}</code></pre><figcaption><a href="https://gist.github.com/Ryan-Gordon/414695174718a689ad2aef7262a243ee#file-googlepluslogin-ts">googlePlusLogin.ts</a></figcaption></figure><p>The pattern we are aiming for is setting up the functions to return promises. Then, if we need to, we can perform some action with the result.</p><p>If the sign-in is successful, then we will get a credential from the result and sign in the user to our Firebase.</p><p>Lastly, depending on how it goes, we will either resolve or reject the promise. This will trigger either the .then or .catch clause anywhere this function is called.</p><p>In the home.ts, this googleLogin function can be called with a .then and .catch clause, and the result will be passed accordingly in case we need to do anything with it.</p><p>When the sign-in is completed, the onAuthStateChanged listener will be triggered and the user information will be updated on the page.</p><p>Google Plus sign-in is now wired up to Firebase and working on the device. If you plan to take this app into production, as noted you’ll need to redo a few things and use a different keystore for release.</p><h3 id="conclusion"><strong>Conclusion</strong></h3><p>In this article, we have set up the Google Sign-in API and worked through a cross platform solution for signing users into our Firebase with Google Plus.</p><p>Although there is a lot of configuration required between Google Developers Console and Firebase, the benefit is that our users can now sign into any web app we build with their existing Google accounts.</p><p>This post is the first of a number I plan to write for Firebase / Ionic sign-ins.</p><p>If you want access to the code, here again is a link to the repo :</p><p><a href="https://github.com/Ryan-Gordon/Ionic-Firestarter" rel="noopener"><strong>Ryan-Gordon/Ionic-Firestarter</strong></a><br><a href="https://github.com/Ryan-Gordon/Ionic-Firestarter" rel="noopener"><em>Ionic-Firestarter - Ionic Firestarter is a open source project showcasing different Firebase features implemented in…</em></a><br><a href="https://github.com/Ryan-Gordon/Ionic-Firestarter" rel="noopener">github.com</a></p><p>Want some similar posts on Ionic ? Here is a couple other posts I’v done:</p><p><a href="/news/how-to-dynamically-theme-your-ionic-application-and-make-your-users-happy-ffa17e15dbf7/"><strong>How to dynamically theme your Ionic application and make your users happy</strong><br><em>Designing a sleek color scheme for your mobile application can be time consuming. Why not let the user choose their own…</em></a></p><p><a href="https://medium.com/@ryangordon210/alternative-sign-in-methods-for-firebase-with-ionic-52714ee9be83" rel="noopener"><strong>Alternative Sign in Methods for Firebase with Ionic</strong></a><br><a href="https://medium.com/@ryangordon210/alternative-sign-in-methods-for-firebase-with-ionic-52714ee9be83" rel="noopener"><em>In my other posts on Firebase sign ins, a focus has been put on Social providers. The main point of this emphasis is to…</em></a><br><a href="https://medium.com/@ryangordon210/alternative-sign-in-methods-for-firebase-with-ionic-52714ee9be83" rel="noopener">medium.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
