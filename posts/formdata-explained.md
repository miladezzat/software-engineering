---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca151740569d1a4ca4deb.jpg"
tags: [JavaScript]
description: In this post, we'll learn about the FormData interface availa
author: "Milad E. Fahmy"
title: "How to upload single or multiple files the easy way with FormData"
created: "2021-08-15T19:33:14+02:00"
modified: "2021-08-15T19:33:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to upload single or multiple files the easy way with FormData</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca151740569d1a4ca4deb.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca151740569d1a4ca4deb.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca151740569d1a4ca4deb.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca151740569d1a4ca4deb.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca151740569d1a4ca4deb.jpg" alt="How to upload single or multiple files the easy way with FormData">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this post, we'll learn about the FormData interface available in <a href="http://caniuse.com/#feat=xhr2">modern web browsers</a> as a part of the HTML5 spec.</p>
<p>We'll see examples of using FormData with Ajax, Angular 7, Ionic and React.</p>
<h2 id="what-s-formdata">What's FormData</h2>
<p>FormData is simply a data structure that can be used to store key-value pairs. Just like its name suggests it's designed for holding forms data i.e you can use it with JavaScript to build an object that corresponds to an HTML form. It's mostly useful when you need to send form data to RESTful API endpoints, for example to upload single or multiple files using the <code>XMLHttpRequest</code> interface, the <code>fetch()</code> API or Axios.</p>
<p>You can create a FormData object by instantiating the FormData interface using the <code>new</code> operator as follows:</p><pre><code class="language-js">const formData = new FormData()
</code></pre>
<p>The <code>formData</code> reference refers to an instance of FormData. You can call many methods on the object to add and work with pairs of data. Each pair has a key and value.</p>
<p>These are the available methods on FormData objects:</p>
<ul>
<li><code>append()</code> : used to append a key-value pair to the object. If the key already exists, the value is appended to the original value for that key,</li>
<li><code>delete()</code>: used to &nbsp;deletes a key-value pair,</li>
<li><code>entries()</code>: returns an Iterator object that you can use to loop through the list the key value pairs in the object,</li>
<li><code>get()</code>: used to return the value for a key. If multiple values are appended, it returns the first value,</li>
<li><code>getAll()</code>: used &nbsp;to return all the values for a specified key,</li>
<li><code>has()</code>: used to check if there’s a key,</li>
<li><code>keys()</code>: returns an Iterator object which you can use to list the available keys in the object,</li>
<li><code>set()</code>: &nbsp;used to add a value to the object, with the specified key. This is going to relace the value if a key already exists,</li>
<li><code>values()</code>: &nbsp;returns an Iterator object for the values of the FormData object.</li>
</ul>
<h2 id="file-upload-example-with-vanilla-javascript">File Upload Example with Vanilla JavaScript</h2>
<p>Let's now see a simple example of file upload using vanilla JavaScript, <code>XMLHttpRequest</code> and <code>FormData</code>.</p>
<p>Navigate to your working folder and create and <code>index.html</code> file with the following content:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Parcel Sandbox&lt;/title&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;&lt;/div&gt;
&lt;script src="index.js"&gt;
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>We simply create an HTML document with a <code>&lt;div&gt;</code> identified by the <code>app</code> ID. Next, we include the <code>index.js</code> file using a <code>&lt;script&gt;</code> tag.</p>
<p>Next, create the <code>index.js</code> file and add following code:</p><pre><code class="language-js">document.getElementById("app").innerHTML = `
&lt;h1&gt;File Upload &amp; FormData Example&lt;/h1&gt;
&lt;div&gt;
&lt;input type="file" id="fileInput" /&gt;
&lt;/div&gt;
`;
const fileInput = document.querySelector("#fileInput");
const uploadFile = file =&gt; {
console.log("Uploading file...");
const API_ENDPOINT = "https://file.io";
const request = new XMLHttpRequest();
const formData = new FormData();
request.open("POST", API_ENDPOINT, true);
request.onreadystatechange = () =&gt; {
if (request.readyState === 4 &amp;&amp; request.status === 200) {
console.log(request.responseText);
}
};
formData.append("file", file);
request.send(formData);
};
fileInput.addEventListener("change", event =&gt; {
const files = event.target.files;
uploadFile(files[0]);
});
</code></pre>
<p>We first insert an <code>&lt;input type="file" id="fileInput" /&gt;</code> element in our HTML page. This will be used to select the file that we'll be uploading.</p>
<p>Next, we query for &nbsp;the file input element using the <code>querySelector()</code> method.</p>
<p>Next, we define the <code>uploadFile()</code> method in which we first declare an &nbsp;<code>API_ENDPOINT</code> variable that holds the address of our file uploading endpoint. Next, we create an <code>XMLHttpRequest</code> request and an empty <code>FormData</code> object.</p>
<p>We use the append method of FormData to append the file, passed as a parameter to the <code>uploadFile()</code> method, to the <code>file</code> key. This will create a key-value pair with <code>file</code> as a key and the content of the passed file as a value.</p>
<p>Next, we send the request using the <code>send()</code> method of <code>XMLHttpRequest</code> and we pass in the <code>FormData</code> object as an argument.</p>
<p>After defining the <code>uploadFile()</code> method, we listen for the change event on the <code>&lt;input&gt;</code> element and we call the &nbsp;<code>uploadFile()</code> method with the selected file as an argument. The file is accessed from <code>event.target.files</code> array.</p>
<p>You can experiment with this example from this code sandbox:</p>
<h2 id="uploading-multiple-files">Uploading Multiple Files</h2>
<p>You can easily modify the code above to support multiple file uploading.</p>
<p>First, you need to add the <code>multiple</code> property to the <code>&lt;input&gt;</code> element:</p><pre><code class="language-html">&lt;input type="file" id="fileInput" multiple /&gt;
</code></pre>
<p>Now, you'll be able to select multiple files from your drive.</p>
<p>Next, change the <code>uploadFile()</code> method to accept an array of files as an argument and simply loop through the array and append the files to the <code>FormData</code> object:</p><pre><code class="language-js">const uploadFile = (files) =&gt; {
console.log("Uploading file...");
const API_ENDPOINT = "https://file.io";
const request = new XMLHttpRequest();
const formData = new FormData();
request.open("POST", API_ENDPOINT, true);
request.onreadystatechange = () =&gt; {
if (request.readyState === 4 &amp;&amp; request.status === 200) {
console.log(request.responseText);
}
};
for (let i = 0; i &lt; files.length; i++) {
formData.append(files[i].name, files[i])
}
request.send(formData);
};
</code></pre>
<p>Finally, call the method with an array of files as argument:</p><pre><code class="language-js">fileInput.addEventListener("change", event =&gt; {
const files = event.target.files;
uploadFile(files);
});
</code></pre>
<p>Next, you can check out these advanced tutorials for how to use <code>FormData</code> with Angular, Ionic and React:</p>
<ul>
<li><a href="https://www.techiediaries.com/angular-formdata/">How to Post FormData with Angular 7</a></li>
<li><a href="https://www.techiediaries.com/react-formdata-file-upload-multipart-form-tutorial/">React &amp; Axios FormData</a></li>
<li><a href="https://www.techiediaries.com/ionic-formdata-multiple-file-upload-tutorial/">Multiple File Upload with Ionic 4 &amp; FormData</a></li>
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
