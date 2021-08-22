---
card: "https://cdn-media-1.freecodecamp.org/images/0*FT5DvBVMqW4zZkQ_"
tags: [Android]
description: "The Android UI is built up from Views, and in a regular appli"
author: "Milad E. Fahmy"
title: "How and why to use Android Visibility Listeners"
created: "2021-08-15T23:46:14+02:00"
modified: "2021-08-15T23:46:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-android tag-tech tag-development tag-coding tag-android-app-development ">
<header class="post-full-header">
<h1 class="post-full-title">How and why to use Android Visibility Listeners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*FT5DvBVMqW4zZkQ_ 300w,
https://cdn-media-1.freecodecamp.org/images/0*FT5DvBVMqW4zZkQ_ 600w,
https://cdn-media-1.freecodecamp.org/images/0*FT5DvBVMqW4zZkQ_ 1000w,
https://cdn-media-1.freecodecamp.org/images/0*FT5DvBVMqW4zZkQ_ 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*FT5DvBVMqW4zZkQ_" alt="How and why to use Android Visibility Listeners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import android.content.Context;
import android.graphics.Color;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import static android.view.Gravity.CENTER;
public class MyCustomView extends LinearLayout {
private final String TAG = MyCustomView.class.getSimpleName();
public MyCustomView(Context context) {
super(context);
this.setBackgroundColor(Color.GREEN);
this.setGravity(CENTER);
TextView myTextView = new TextView(context);
myTextView.setText("My Custom View");
addView(myTextView);
}
@Override
public void onVisibilityChanged(View changedView, int visibility) {
super.onVisibilityChanged(changedView, visibility);
Log.d(TAG, "View " + changedView + " changed visibility to " + visibility);
}
@Override
public void onWindowVisibilityChanged(int visibility) {
super.onWindowVisibilityChanged(visibility);
Log.d(TAG, "Window visibility changed to " + visibility);
}
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
public class MainActivity extends AppCompatActivity {
private Button addCustomViewBtn;
@Override
protected void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);
setContentView(R.layout.activity_main);
addCustomViewBtn = (Button) findViewById(R.id.addCustomViewBtn);
addCustomViewBtn.setOnClickListener(new View.OnClickListener() {
@Override
public void onClick(View view) {
LinearLayout mainLayout = (LinearLayout) findViewById(R.id.mainLayout);
MyCustomView myCustomView = new MyCustomView(getApplicationContext());
myCustomView.setLayoutParams(new LinearLayout.LayoutParams(
LinearLayout.LayoutParams.MATCH_PARENT,
LinearLayout.LayoutParams.WRAP_CONTENT));
mainLayout.addView(myCustomView);
}
});
}
ViewTreeObserver viewTreeObserver = linearLayout.getViewTreeObserver();
viewTreeObserver.addOnGlobalLayoutListener (new ViewTreeObserver.OnGlobalLayoutListener() {
@Override
public void onGlobalLayout() {
linearLayout.getViewTreeObserver().removeOnGlobalLayoutListener(this);
//TODO Add Logic
}
});</code></pre><figcaption>removeOnGlobalLayoutListener requires API &gt; 15</figcaption></figure><p>The line <code>linearLayout.getViewTreeObserver().removeOnGlobalLayoutListener(this)</code><em> </em>makes sure that the listener will only get called once. If you want to continue listening in on changes, remove it.</p><p>If you have any comments or suggestions, feel free to let me know.</p>
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
