---
card: "https://cdn-media-1.freecodecamp.org/images/1*qL5RAfsdeIw875myQ3f9Ag.png"
tags: [Aspnetcore]
description: "by Yogi"
author: "Milad E. Fahmy"
title: "How to easily implement QRCoder in ASP.NET Core using C#"
created: "2021-08-16T10:06:17+02:00"
modified: "2021-08-16T10:06:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aspnetcore tag-csharp tag-web-development tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to easily implement QRCoder in ASP.NET Core using C#</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*qL5RAfsdeIw875myQ3f9Ag.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*qL5RAfsdeIw875myQ3f9Ag.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*qL5RAfsdeIw875myQ3f9Ag.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*qL5RAfsdeIw875myQ3f9Ag.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*qL5RAfsdeIw875myQ3f9Ag.png" alt="How to easily implement QRCoder in ASP.NET Core using C#">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
{
return View();
}</code></pre><p>Import the following namespaces in the controller:</p><pre><code>using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using QRCoder;</code></pre><p>Next, add the Index Action of type <code>[HttpPost]</code> to the controller:</p><pre><code>[HttpPost]
public IActionResult Index(string qrText)
{
QRCodeGenerator qrGenerator = new QRCodeGenerator();
QRCodeData qrCodeData = qrGenerator.CreateQrCode(qrText,
QRCodeGenerator.ECCLevel.Q);
QRCode qrCode = new QRCode(qrCodeData);
Bitmap qrCodeImage = qrCode.GetGraphic(20);
return View(BitmapToBytes(qrCodeImage));
}</code></pre><blockquote>This Index Action receives a string parameter called ‘qrText’. It contains the text that is provided by an Input control defined in the View. This text will be converted to QR Code Bitmap image. The following code lines do this work:</blockquote><pre><code>QRCodeGenerator qrGenerator = new QRCodeGenerator();
QRCodeData qrCodeData = qrGenerator.CreateQrCode(qrText, QRCodeGenerator.ECCLevel.Q);
QRCode qrCode = new QRCode(qrCodeData);
Bitmap qrCodeImage = qrCode.GetGraphic(20);</code></pre><p>The QRCode object (‘<code>qrCode</code>’) defined calls a static function called ‘<code>BitmapToBytes()</code>’. The role of this function is to convert the Bitmap image to ‘<code>Byte[]</code>’.</p><p>Add this function to your controller:</p><pre><code>private static Byte[] BitmapToBytes(Bitmap img)
{
using (MemoryStream stream = new MemoryStream())
{
img.Save(stream, System.Drawing.Imaging.ImageFormat.Png);
return stream.ToArray();
}
}</code></pre><p>Finally create the Index View inside the ‘<code>Views/QRCoder</code>’ folder with the following code:</p><pre><code>@model Byte[]
@{
Layout = null;
}
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta name="viewport" content="width=device-width" /&gt;
&lt;title&gt;Implementing QRCoder in ASP.NET Core - Create QR Code&lt;/title&gt;
&lt;style&gt;
body {
background: #111 no-repeat;
background-image: -webkit-gradient(radial, 50% 0, 150, 50% 0, 300, from(#444), to(#111));
}
h1,
h2,
h3 {
text-align: center;
color: #FFF;
margin: 5px 0;
}
h1 {
font-size: 30px;
}
h2 a {
font-size: 25px;
color: #0184e3;
text-decoration: none;
}
h3 {
font-size: 23px;
border-bottom: solid 3px #CCC;
padding-bottom: 10px;
}
h3 a {
color: #00e8ff;
text-decoration: none;
}
h3 a:hover,
h2 a:hover {
text-decoration: underline;
}
.container {
width: 800px;
margin: auto;
color: #FFF;
font-size: 25px;
}
.container #content {
border: dashed 2px #CCC;
padding: 10px;
}
#reset {
padding: 5px 10px;
background: #4CAF50;
border: none;
color: #FFF;
cursor: pointer;
}
#reset:hover {
color: #4CAF50;
background: #FFF;
}
#viewContent table {
width: 100%;
}
#viewContent table tr {
height: 80px;
background: darkcyan;
}
#viewContent table tr td {
width: 50%;
padding-left: 5px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;div id="content"&gt;
&lt;h1&gt;Implementing QRCoder in ASP.NET Core - Create QR Code&lt;/h1&gt;
&lt;h2&gt;
&lt;a href="http://www.yogihosting.com/category/aspnet-core/"&gt;Read the tutorial on YogiHosting » &lt;/a&gt;
&lt;button id="reset" onclick="location=''"&gt;Reset »&lt;/button&gt;
&lt;/h2&gt;
&lt;div id="viewContent"&gt;
@using (Html.BeginForm(null, null, FormMethod.Post)) {
&lt;table&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;
&lt;label&gt;Enter text for creating QR Code&lt;/label
&lt;/td&gt;
&lt;td&gt;
&lt;input type="text" name="qrText" /&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td colspan="2"&gt;
&lt;button&gt;Submit&lt;/button&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
}
&lt;/div&gt;
@{
if (Model != null)
{
&lt;h3&gt;QR Code Successfully Generated&lt;/h3&gt;
&lt;img src="@String.Format("data:image/png;base64,{0}", Convert.ToBase64String(Model))" /&gt;
}
}
&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>The Index View has an ‘<code>input</code>’ control. The user enters their text into this control to create the QR Code:</p><p><code>&lt;input type="text" name="qrText"</code> /&gt;</p><p>Once the QR Code is generated by the Index Action method, its ‘<code>byte</code>’ array is returned to the View as model and then the bitmap image is displayed by the below code:</p><pre><code>@{
if (Model != null)
{
&lt;h3&gt;QR Code Successfully Generated&lt;/h3&gt;
&lt;img src="@String.Format("data:image/png;base64,{0}", Convert.ToBase64String(Model))" /&gt;
}
{
return View();
}
[HttpPost]
public IActionResult GenerateFile(string qrText)
{
QRCodeGenerator qrGenerator = new QRCodeGenerator();
QRCodeData qrCodeData = qrGenerator.CreateQrCode(qrText,   QRCodeGenerator.ECCLevel.Q);
string fileGuid = Guid.NewGuid().ToString().Substring(0, 4);
qrCodeData.SaveRawData("wwwroot/qrr/file-" + fileGuid + ".qrr", QRCodeData.Compression.Uncompressed);
QRCodeData qrCodeData1 = new QRCodeData("wwwroot/qrr/file-" + fileGuid + ".qrr", QRCodeData.Compression.Uncompressed);
QRCode qrCode = new QRCode(qrCodeData1);
Bitmap qrCodeImage = qrCode.GetGraphic(20);
return View(BitmapToBytes(qrCodeImage));
}</code></pre><p>The <code>[HttpPost] </code>version of this action method generates the QR Code files inside the ‘<code>wwwroot/qrr</code>’ folder. The code that does this work is the following:</p><pre><code>QRCodeGenerator qrGenerator = new QRCodeGenerator();
QRCodeData qrCodeData = qrGenerator.CreateQrCode(qrText, QRCodeGenerator.ECCLevel.Q);
string fileGuid = Guid.NewGuid().ToString().Substring(0, 4);
qrCodeData.SaveRawData("wwwroot/qrr/file-" + fileGuid + ".qrr", QRCodeData.Compression.Uncompressed);</code></pre><p>Once the .qrr file is created then I am simply reading it for its saved location in the website. Then I am converting it to Bitmap type and finally sending the image’s bytes to the view. The corresponding code is:</p><pre><code>QRCodeData qrCodeData1 = new QRCodeData("wwwroot/qrr/file-" + fileGuid + ".qrr", QRCodeData.Compression.Uncompressed);
QRCode qrCode = new QRCode(qrCodeData1);
Bitmap qrCodeImage = qrCode.GetGraphic(20);
return View(BitmapToBytes(qrCodeImage));</code></pre><p>Next, add the GenerateFile view inside the ‘<code>Views/QRCoder</code>’ folder and add the following code to it:</p><pre><code>@model Byte[]
@{
Layout = null;
}
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta name="viewport" content="width=device-width" /&gt;
&lt;title&gt;Implementing QRCoder in ASP.NET Core - Create QR Code File&lt;/title&gt;
&lt;style&gt;
body {
background: #111 no-repeat;
background-image: -webkit-gradient(radial, 50% 0, 150, 50% 0, 300, from(#444), to(#111));
}
h1,
h2,
h3 {
text-align: center;
color: #FFF;
margin: 5px 0;
}
h1 {
font-size: 30px;
}
h2 a {
font-size: 25px;
color: #0184e3;
text-decoration: none;
}
h3 {
font-size: 23px;
border-bottom: solid 3px #CCC;
padding-bottom: 10px;
}
h3 a {
color: #00e8ff;
text-decoration: none;
}
h3 a:hover,
h2 a:hover {
text-decoration: underline;
}
.container {
width: 800px;
margin: auto;
color: #FFF;
font-size: 25px;
}
.container #content {
border: dashed 2px #CCC;
padding: 10px;
}
#reset {
padding: 5px 10px;
background: #4CAF50;
border: none;
color: #FFF;
cursor: pointer;
}
#reset:hover {
color: #4CAF50;
background: #FFF;
}
#viewContent table {
width: 100%;
}
#viewContent table tr {
height: 80px;
background: darkcyan;
}
#viewContent table tr td {
width: 50%;
padding-left: 5px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;div id="content"&gt;
&lt;h1&gt;Implementing QRCoder in ASP.NET Core - Create QR Code File&lt;/h1&gt;
&lt;h2&gt;
&lt;a href="http://www.yogihosting.com/category/aspnet-core/"&gt;Read the tutorial on YogiHosting » &lt;/a&gt;
&lt;button id="reset" onclick="location=''"&gt;Reset »&lt;/button&gt;
&lt;/h2&gt;
&lt;div id="viewContent"&gt;
@using (Html.BeginForm(null, null, FormMethod.Post)) {
&lt;table&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;
&lt;label&gt;Enter text for creating QR File&lt;/label&gt;
&lt;/td&gt;
&lt;td&gt;
&lt;input type="text" name="qrText" /&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td colspan="2"&gt;
&lt;button&gt;Submit&lt;/button&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
}
&lt;/div&gt;
@{ if (Model != null) {
&lt;h3&gt;QR Code file Successfully Generated&lt;/h3&gt;
&lt;img src="@String.Format(" data:image/png;base64,{0} ", Convert.ToBase64String(Model))" /&gt; } }
&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>The code of this View is exactly similar to the ‘Index’ View and works exactly like it.</p><p>The URL to invoke this View is ‘<code>http://localhost:50755/QRCoder/GenerateFile</code>’.</p><h3 id="read-and-display-all-the-qr-code-files-qrr-"><strong>Read and display all the QR Code Files (.qrr)</strong></h3><p>You can also read all the .qrr files saved in the website. Go to your controller and add a new action called ‘ViewFile’:</p><pre><code>public IActionResult ViewFile()
{
List&lt;KeyValuePair&lt;string, Byte[]&gt;&gt; fileData=new List&lt;KeyValuePair&lt;string, byte[]&gt;&gt;();
KeyValuePair&lt;string, Byte[]&gt; data;
string[] files = Directory.GetFiles("wwwroot/qrr");
foreach (string file in files)
{
QRCodeData qrCodeData = new QRCodeData(file, QRCodeData.Compression.Uncompressed);
QRCode qrCode = new QRCode(qrCodeData);
Bitmap qrCodeImage = qrCode.GetGraphic(20);
Byte[] byteData = BitmapToBytes(qrCodeImage);
data = new KeyValuePair&lt;string, Byte[]&gt;(Path.GetFileName(file), byteData);
fileData.Add(data);
}
return View(fileData);
}</code></pre><p>In this action method, I read the filed located in the ‘qrr’ folder using the code:</p><pre><code>Directory.GetFiles("wwwroot/qrr")</code></pre><p>Then I add each qrr file’s bytes and name inside a <code>List&lt;KeyValuePair&lt;string, Byte[]&gt;&gt;</code> object.</p><p>This object is returned to the View at the end:</p><pre><code>return View(fileData);</code></pre><p>Finally create the ‘<code>ViewFile</code>’ View inside the ‘<code>Views/QRCoder</code>’ folder with the following code:</p><pre><code>@model List
&lt;KeyValuePair&lt;string, Byte[]&gt;&gt;
@{
Layout = null;
}
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta name="viewport" content="width=device-width" /&gt;
&lt;title&gt;Implementing QRCoder in ASP.NET Core - View QR Code Files&lt;/title&gt;
&lt;style&gt;
body {
background: #111 no-repeat;
background-image: -webkit-gradient(radial, 50% 0, 150, 50% 0, 300, from(#444), to(#111));
}
h1,
h2,
h3 {
text-align: center;
color: #FFF;
margin: 5px 0;
}
h1 {
font-size: 30px;
}
h2 a {
font-size: 25px;
color: #0184e3;
text-decoration: none;
}
h3 {
font-size: 23px;
border-bottom: solid 3px #CCC;
padding-bottom: 10px;
}
h3 a {
color: #00e8ff;
text-decoration: none;
}
h3 a:hover,
h2 a:hover {
text-decoration: underline;
}
.container {
width: 800px;
margin: auto;
color: #FFF;
font-size: 25px;
}
.container #content {
border: dashed 2px #CCC;
padding: 10px;
}
#reset {
padding: 5px 10px;
background: #4CAF50;
border: none;
color: #FFF;
cursor: pointer;
}
#reset:hover {
color: #4CAF50;
background: #FFF;
}
#viewContent table {
width: 100%;
}
#viewContent table tr {
height: 80px;
background: darkcyan;
}
#viewContent table tr td {
width: 50%;
padding-left: 5px;
}
#viewContent table tr td img {
width: 150px;
}
#viewContent table tr td span {
display: block;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;div id="content"&gt;
&lt;h1&gt;Implementing QRCoder in ASP.NET Core - View QR Code Files&lt;/h1&gt;
&lt;h2&gt;
&lt;a href="http://www.yogihosting.com/category/aspnet-core/"&gt;Read the tutorial on YogiHosting » &lt;/a&gt;
&lt;button id="reset" onclick="location=''"&gt;Reset »&lt;/button&gt;
&lt;/h2&gt;
&lt;div id="viewContent"&gt;
&lt;table&gt;
&lt;tbody&gt;
@foreach (KeyValuePair
&lt;string, Byte[]&gt; k in Model) {
&lt;tr&gt;
&lt;td&gt;
&lt;img src="@String.Format(" data:image/png;base64,{0} ", Convert.ToBase64String(k.Value))" /&gt;
&lt;span&gt;@k.Key&lt;/span&gt;
&lt;/td&gt;
&lt;/tr&gt;
}
&lt;/tbody&gt;
&lt;/table&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>This View displays all the qrr files as bitmap images inside a ‘HTML’ table. The below code creates the HTML table:</p><pre><code>&lt;table&gt;
&lt;tbody&gt;
@foreach (KeyValuePair&lt;string, Byte[]&gt; k in Model)
{
&lt;tr&gt;
&lt;td&gt;
&lt;img src="@String.Format("data:image/png;base64,{0}", Convert.ToBase64String(k.Value))" /&gt;
&lt;span&gt;@k.Key&lt;/span&gt;
&lt;/td&gt;
&lt;/tr&gt;
}
&lt;/tbody&gt;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
