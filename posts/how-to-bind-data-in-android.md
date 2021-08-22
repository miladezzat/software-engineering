---
card: "/images/default.jpg"
tags: [Android]
description: "Data binding is a technique used when you want to glue pieces"
author: "Milad E. Fahmy"
title: "How to Bind Data in Android"
created: "2021-08-15T23:43:19+02:00"
modified: "2021-08-15T23:43:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-android tag-kotlin tag-binding-data tag-coding tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to Bind Data in Android</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/02/robert-bye-u2B-xZhoNaE-unsplash.jpg 300w,
/news/content/images/size/w600/2020/02/robert-bye-u2B-xZhoNaE-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/02/robert-bye-u2B-xZhoNaE-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/02/robert-bye-u2B-xZhoNaE-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/02/robert-bye-u2B-xZhoNaE-unsplash.jpg" alt="How to Bind Data in Android">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
android:orientation="vertical"
android:layout_gravity="center_horizontal"
android:layout_height="wrap_content"
android:layout_width="wrap_content"&gt;
&lt;ImageView
android:id="@+id/imageView"
android:layout_height="100dp"
android:layout_width="100dp"
android:src="@drawable/image_name"
android:adjustViewBounds="true"
android:scaleType="centerInside"
/&gt;
&lt;TextView
android:id="@+id/textView"
android:gravity="center_horizontal"
android:layout_height="wrap_content"
android:layout_width="match_parent"
android:text="Image Text"
android:textSize="16sp" /&gt;
compileSdkVersion 29
buildToolsVersion "29.0.2"
defaultConfig {
applicationId "com.tomerpacific.example"
minSdkVersion 15
targetSdkVersion 29
versionCode 1
versionName "1.0"
testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
dataBinding {              //&lt;-------
enabled = true
}
}
buildTypes {
release {
minifyEnabled false
proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
}
}
import android.graphics.drawable.Drawable
data class ButtonData(val buttonText: String, val buttonImageSrc : Drawable)
&lt;layout xmlns:android="http://schemas.android.com/apk/res/android"&gt;  // &lt;---- 1
&lt;data&gt;
&lt;variable name="buttonData" type="com.tomerpacific.example.ButtonData"/&gt; // &lt;---- 2
&lt;/data&gt;
&lt;androidx.constraintlayout.widget.ConstraintLayout xmlns:app="http://schemas.android.com/apk/res-auto"
android:layout_width="match_parent"
android:layout_height="match_parent"&gt;
&lt;TextView
android:id="@+id/textView2"
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:text="Example"
android:textSize="30dp"
app:layout_constraintLeft_toLeftOf="parent"
app:layout_constraintRight_toRightOf="parent"
app:layout_constraintTop_toTopOf="parent" /&gt;
&lt;LinearLayout
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:layout_gravity="center_horizontal"
android:orientation="vertical"
app:layout_constraintBottom_toBottomOf="parent"
app:layout_constraintEnd_toStartOf="@+id/linearLayout3"
app:layout_constraintStart_toStartOf="parent"
app:layout_constraintTop_toBottomOf="@+id/textView2"&gt;
&lt;ImageButton
android:layout_width="100dp"
android:layout_height="100dp"
android:adjustViewBounds="true"
android:scaleType="centerInside"
android:src="@drawable/android"&gt;
&lt;/ImageButton&gt;
&lt;TextView
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:gravity="center_horizontal"
android:text="Image Text"
android:textSize="16sp" /&gt;
&lt;/LinearLayout&gt;
&lt;LinearLayout
android:id="@+id/linearLayout3"
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:layout_gravity="center_horizontal"
android:orientation="vertical"
app:layout_constraintBottom_toBottomOf="parent"
app:layout_constraintEnd_toEndOf="parent"
app:layout_constraintStart_toStartOf="parent"
app:layout_constraintTop_toBottomOf="@+id/textView2"
app:layout_constraintVertical_bias="0.504"&gt;
&lt;ImageButton
android:layout_width="100dp"
android:layout_height="100dp"
android:adjustViewBounds="true"
android:scaleType="centerInside"
android:src="@drawable/android_p_logo"&gt;
&lt;/ImageButton&gt;
&lt;TextView
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:gravity="center_horizontal"
android:text="Image Text"
android:textSize="16sp" /&gt;
&lt;/LinearLayout&gt;
&lt;LinearLayout
android:id="@+id/linearLayout2"
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:layout_gravity="center_horizontal"
android:orientation="vertical"
app:layout_constraintBottom_toBottomOf="parent"
app:layout_constraintEnd_toEndOf="parent"
app:layout_constraintHorizontal_bias="0.200"
app:layout_constraintStart_toEndOf="@+id/linearLayout3"
app:layout_constraintTop_toBottomOf="@+id/textView2"
app:layout_constraintVertical_bias="0.504"&gt;
&lt;ImageButton
android:layout_width="100dp"
android:layout_height="100dp"
android:adjustViewBounds="true"
android:scaleType="centerInside"
android:src="@drawable/android_studio_icon"&gt;
&lt;/ImageButton&gt;
&lt;TextView
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:gravity="center_horizontal"
android:text="Image Text"
android:textSize="16sp" /&gt;
&lt;/LinearLayout&gt;
&lt;/androidx.constraintlayout.widget.ConstraintLayout&gt;
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.databinding.DataBindingUtil
import com.tomerpacific.example.databinding.ActivityMainBinding
class MainActivity : AppCompatActivity() {
override fun onCreate(savedInstanceState: Bundle?) {
super.onCreate(savedInstanceState)
setContentView(R.layout.activity_main)
val binding: ActivityMainBinding = DataBindingUtil.setContentView(
this, R.layout.activity_main)
binding.buttonData = ButtonData("First", resources.getDrawable(R.drawable.android))
}
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:layout_gravity="center_horizontal"
android:orientation="vertical"
app:layout_constraintBottom_toBottomOf="parent"
app:layout_constraintEnd_toStartOf="@+id/linearLayout3"
app:layout_constraintStart_toStartOf="parent"
app:layout_constraintTop_toBottomOf="@+id/textView2"&gt;
&lt;ImageButton
android:layout_width="100dp"
android:layout_height="100dp"
android:adjustViewBounds="true"
android:scaleType="centerInside"
android:src="@{buttonData.buttonImageSrc}"&gt;  // &lt;----
&lt;/ImageButton&gt;
&lt;TextView
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:gravity="center_horizontal"
android:text="@{buttonData.buttonText}"   // &lt;----
data class ButtonsData(val buttonsData : List&lt;ButtonData&gt;) {
fun get(index: Int) : ButtonData {
return buttonsData.get(index)
}
&lt;variable name="buttonsData" type="com.tomerpacific.example.ButtonsData"/&gt;
super.onCreate(savedInstanceState)
setContentView(R.layout.activity_main)
val binding: ActivityMainBinding = DataBindingUtil.setContentView(
this, R.layout.activity_main)
val firstButton : ButtonData = ButtonData("First", resources.getDrawable(R.drawable.android))
val secondButton : ButtonData = ButtonData("Second", resources.getDrawable(R.drawable.android_p_logo))
val thirdButton : ButtonData = ButtonData("Third", resources.getDrawable(R.drawable.android_studio_icon))
val buttonsData : ButtonsData = ButtonsData(listOf(firstButton, secondButton, thirdButton))
binding.buttonsData = buttonsData
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:layout_gravity="center_horizontal"
android:orientation="vertical"
app:layout_constraintBottom_toBottomOf="parent"
app:layout_constraintEnd_toStartOf="@+id/linearLayout3"
app:layout_constraintStart_toStartOf="parent"
app:layout_constraintTop_toBottomOf="@+id/textView2"&gt;
&lt;ImageButton
android:layout_width="100dp"
android:layout_height="100dp"
android:adjustViewBounds="true"
android:scaleType="centerInside"
android:src="@{buttonsData.get(0).buttonImageSrc}"&gt;   // &lt;-------
&lt;/ImageButton&gt;
&lt;TextView
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:gravity="center_horizontal"
android:text="@{buttonsData.get(0).buttonText}"       // &lt;--------
android:textSize="16sp" /&gt;
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
