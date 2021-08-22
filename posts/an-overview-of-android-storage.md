---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca0aa740569d1a4ca4a11.jpg"
tags: [Android]
description: "Storage is this thing we are all aware of, but always take fo"
author: "Milad E. Fahmy"
title: "An Overview of Android Storage"
created: "2021-08-15T23:43:36+02:00"
modified: "2021-08-15T23:43:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-android tag-storage tag-development tag-tech tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">An Overview of Android Storage</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca0aa740569d1a4ca4a11.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0aa740569d1a4ca4a11.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0aa740569d1a4ca4a11.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0aa740569d1a4ca4a11.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca0aa740569d1a4ca4a11.jpg" alt="An Overview of Android Storage">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
String FILENAME = "hello_world_file";
String inputToFile = "Hello From Internal Storage!";
try {
FileOutputStream fileOutputStream = openFileOutput(FILENAME, Context.MODE_PRIVATE);
fileOutputStream.write(inputToFile.getBytes());
fileOutputStream.close();
Toast.makeText(getApplicationContext(),
"File " + FILENAME + " has been saved successfully",
Toast.LENGTH_SHORT).show();
} catch (FileNotFoundException e) {
e.printStackTrace();
Toast.makeText(getApplicationContext(),
"File " + FILENAME + " has not been saved successfully due to an exception " + e.getLocalizedMessage(),
Toast.LENGTH_SHORT).show();
} catch (IOException e) {
e.printStackTrace();
Toast.makeText(getApplicationContext(),
"File " + FILENAME + " has not been saved successfully due to an exception " + e.getLocalizedMessage(),
Toast.LENGTH_SHORT).show();
}
public boolean isExternalStorageWritable() {
String state = Environment.getExternalStorageState();
if (Environment.MEDIA_MOUNTED.equals(state)) {
return true;
}
return false;
if (isExternalStorageWritable()) {
if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE) ==
PackageManager.PERMISSION_GRANTED) {
writeFileToExternalStorage();
} else{
ActivityCompat.requestPermissions(this,
new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, 0);
}
}
}
@Override
public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
switch (requestCode) {
case 0:
{
writeFileToExternalStorage();
break;
}
}
String root = Environment.getExternalStorageDirectory().toString();
File myDir = new File(root + "/saved_files");
if (!myDir.exists()) {
myDir.mkdirs();
}
try {
File file = new File(myDir, "myfile.txt");
FileOutputStream out = new FileOutputStream(file);
out.write(inputToFile.getBytes());
out.close();
Toast.makeText(getApplicationContext(),
"File myfile.txt" + " has been saved successfully to external storage",
Toast.LENGTH_SHORT).show();
} catch (Exception e) {
e.printStackTrace();
}
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
