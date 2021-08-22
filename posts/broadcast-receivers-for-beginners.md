---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca18d740569d1a4ca4f47.jpg"
tags: [Android]
description: "Let’s say you have an application that depends on a steady in"
author: "Milad E. Fahmy"
title: "Broadcast Receivers For Beginners"
created: "2021-08-15T23:43:42+02:00"
modified: "2021-08-15T23:43:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-android tag-broadcast-receivers tag-coding tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Broadcast Receivers For Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca18d740569d1a4ca4f47.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca18d740569d1a4ca4f47.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca18d740569d1a4ca4f47.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca18d740569d1a4ca4f47.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca18d740569d1a4ca4f47.jpg" alt="Broadcast Receivers For Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;intent-filter&gt;
&lt;!-- The actions you wish to listen to, below is an example --&gt;
&lt;action android:name="android.intent.action.BOOT_COMPLETED"/&gt;
&lt;/intent-filter&gt;
&lt;/receiver&gt;</code></pre><figcaption>AndroidManifest.xml</figcaption></figure><p>You will notice that the broadcast receiver declared above has a property of <strong><strong><em>exported=”true”</em></strong></strong>. This attribute tells the receiver that it can receive broadcasts from outside the scope of the application.</p><p>2. Or dynamically by registering an instance with registerReceiver (what is known as context registered)</p><pre><code class="language-java">public abstract Intent registerReceiver (BroadcastReceiver receiver,
IntentFilter filter);</code></pre><hr><h4 id="implementation">Implementation</h4><p>To create your own broadcast receiver, you must first extend the BroadcastReceiver parent class and override the mandatory method, onReceive:</p><pre><code class="language-java">public void onReceive(Context context, Intent intent) {
//Implement your logic here
@Override
public void onReceive(Context context, Intent intent) {
StringBuilder sb = new StringBuilder();
sb.append("Action: " + intent.getAction() + "\n");
sb.append("URI: " + intent.toUri(Intent.URI_INTENT_SCHEME).toString() + "\n");
String log = sb.toString();
Toast.makeText(context, log, Toast.LENGTH_LONG).show();
}
filter.addAction(Intent.ACTION_AIRPLANE_MODE_CHANGED);
this.registerReceiver(myBroadcastReceiver, filter);</code></pre><figcaption>The first parameter for the IntentFilter is a string representing an action</figcaption></figure><p>Don’t forget to unregister your broadcast receiver when you no longer need it</p><pre><code class="language-java">@Override
protected void onStop() {
super.onStop();
unregisterReceiver(myBroadcastReceiver);
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
