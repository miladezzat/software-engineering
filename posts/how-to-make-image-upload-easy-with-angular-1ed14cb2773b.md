---
card: "https://cdn-media-1.freecodecamp.org/images/1*dxawCwfllIh8ljUcRtwnXg.png"
tags: [JavaScript]
description: by Filip Jerga
author: "Milad E. Fahmy"
title: "How to make image upload easy with Angular"
created: "2021-08-15T19:42:04+02:00"
modified: "2021-08-15T19:42:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angularjs tag-tech tag-programming tag-image ">
<header class="post-full-header">
<h1 class="post-full-title">How to make image upload easy with Angular</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*dxawCwfllIh8ljUcRtwnXg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*dxawCwfllIh8ljUcRtwnXg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*dxawCwfllIh8ljUcRtwnXg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*dxawCwfllIh8ljUcRtwnXg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*dxawCwfllIh8ljUcRtwnXg.png" alt="How to make image upload easy with Angular">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Filip Jerga</p>
<h1 id="how-to-make-image-upload-easy-with-angular">How to make image upload easy with Angular</h1>
<p>This is the second part of the tutorial on how to upload an image to Amazon S3. You can find the first part <a href="https://medium.freecodecamp.org/how-to-set-up-simple-image-upload-with-node-and-aws-s3-84e609248792" rel="noopener">here</a>. In this article, we will take a look at the Angular Part.</p>
<p><strong>You can also watch my step by step video tutorial of an image upload. The link is provided at the bottom of this article.</strong></p>
<h3 id="1-create-a-template-first">1. Create a template first</h3>
<p>First, we want to create a reusable component that will be easily pluggable into other components.</p>
<p>Let’s start with a simple HTML template for our input. Don’t forget to apply styles of your choice, or you can get them from my <a href="https://gist.github.com/Jerga99/7fe7b1942c6e5bbe4723f2369c760649" rel="noopener">GitHub repo</a>.</p><pre><code class="language-ts">&lt;label class="image-upload-container btn btn-bwm"&gt;
&lt;span&gt;Select Image&lt;/span&gt;
&lt;input #imageInput
type="file"
accept="image/*"
(change)="processFile(imageInput)"&gt;
&lt;/label&gt;</code></pre>
<p>Important here is a <strong>type</strong> of input, which is set to a <strong>file. </strong>The<strong> Accept </strong>attribute defines accepted files for input. <strong>Image/* </strong>specifies that we can choose images of any type by this input. <strong>#imageInput </strong>is a reference of input on which we can access uploaded files.</p>
<p>A<strong> Change</strong> event is fired when we select a file. So let’s take a look at the class code.</p>
<h3 id="2-don-t-forget-for-component-code">2. Don’t forget for Component Code</h3><pre><code class="language-ts">class ImageSnippet {
constructor(public src: string, public file: File) {}
}
@Component({
selector: 'bwm-image-upload',
templateUrl: 'image-upload.component.html',
styleUrls: ['image-upload.component.scss']
})
export class ImageUploadComponent {
selectedFile: ImageSnippet;
constructor(private imageService: ImageService){}
processFile(imageInput: any) {
const file: File = imageInput.files[0];
const reader = new FileReader();
reader.addEventListener('load', (event: any) =&gt; {
this.selectedFile = new ImageSnippet(event.target.result, file);
this.imageService.uploadImage(this.selectedFile.file).subscribe(
(res) =&gt; {
},
(err) =&gt; {
})
});
reader.readAsDataURL(file);
}
}</code></pre>
<p>Let’s break down this code. You can see in the <strong>processFile </strong>that<strong> </strong>we are getting an image input we sent from the <strong>change </strong>event. By writing <strong>imageInput.files[0] </strong>we are accessing the first <strong>file</strong>. We need a <strong>reader</strong> in order to access additional properties of a file. By calling <strong>readAsDataURL, </strong>we can get a base64 representation of an image in the callback function of the <strong>addEventListener </strong>we subscribed to before.</p>
<p>In a callback function, we are creating an instance of the <strong>ImageSnippet. The first</strong> value is a base64 representation of an image we will display later on the screen. <strong>The second</strong> value is a file itself, which we will send to the server for upload to Amazon S3.</p>
<p>Now, we just need to provide this file and send a request through a service.</p>
<h3 id="3-we-need-a-service-as-well">3. We need a service as well</h3>
<p>It wouldn’t be an Angular app without a service. The service will be the one responsible for sending a request to our Node server.</p><pre><code class="language-ts">export class ImageService {
constructor(private http: Http) {}
public uploadImage(image: File): Observable&lt;Response&gt; {
const formData = new FormData();
formData.append('image', image);
return this.http.post('/api/v1/image-upload', formData);
}
}</code></pre>
<p>As I told you in the previous lecture, we need to send an image as part of the <strong>form data</strong>. We will append the image under the key of an <strong>image </strong>to form data (same key we configured before in Node). Finally, we just need to send a request to the server with <strong>formData</strong> in a payload.</p>
<p><strong>Now we can celebrate. That’s it! Image sent to upload!</strong></p>
<p>In the next lines, I will provide some additional code for a better user experience.</p>
<h3 id="4-additional-ux-updates">4. Additional UX Updates</h3><pre><code class="language-ts">class ImageSnippet {
pending: boolean = false;
status: string = 'init';
constructor(public src: string, public file: File) {}
}
@Component({
selector: 'bwm-image-upload',
templateUrl: 'image-upload.component.html',
styleUrls: ['image-upload.component.scss']
})
export class ImageUploadComponent {
selectedFile: ImageSnippet;
constructor(private imageService: ImageService){}
private onSuccess() {
this.selectedFile.pending = false;
this.selectedFile.status = 'ok';
}
private onError() {
this.selectedFile.pending = false;
this.selectedFile.status = 'fail';
this.selectedFile.src = '';
}
processFile(imageInput: any) {
const file: File = imageInput.files[0];
const reader = new FileReader();
reader.addEventListener('load', (event: any) =&gt; {
this.selectedFile = new ImageSnippet(event.target.result, file);
this.selectedFile.pending = true;
this.imageService.uploadImage(this.selectedFile.file).subscribe(
(res) =&gt; {
this.onSuccess();
},
(err) =&gt; {
this.onError();
})
});
reader.readAsDataURL(file);
}
}</code></pre>
<p>We added new properties to the <strong>ImageSnippet: Pending </strong>and <strong>Status. Pending</strong> can be false or true, depending if an image is currently being uploaded. <strong>Status </strong>is the result of the uploading process. It can be <strong>OK </strong>or <strong>FAILED.</strong></p>
<p><strong>OnSuccess </strong>and <strong>onError </strong>are called after image upload and they set the status of an image.</p>
<p>Ok, now let’s take a look at the updated template file:</p><pre><code class="language-ts">&lt;label class="image-upload-container btn btn-bwm"&gt;
&lt;span&gt;Select Image&lt;/span&gt;
&lt;input #imageInput
type="file"
accept="image/*"
(change)="processFile(imageInput)"&gt;
&lt;/label&gt;
&lt;div *ngIf="selectedFile" class="img-preview-container"&gt;
&lt;div class="img-preview{{selectedFile.status === 'fail' ? '-error' : ''}}"
[ngStyle]="{'background-image': 'url('+ selectedFile.src + ')'}"&gt;
&lt;/div&gt;
&lt;div *ngIf="selectedFile.pending" class="img-loading-overlay"&gt;
&lt;div class="img-spinning-circle"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div *ngIf="selectedFile.status === 'ok'" class="alert alert-success"&gt; Image Uploaded Succesfuly!&lt;/div&gt;
&lt;div *ngIf="selectedFile.status === 'fail'" class="alert alert-danger"&gt; Image Upload Failed!&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>Here we are displaying our uploaded image and errors on the screen depending on the <strong>state</strong> of an <strong>image</strong>. When the image is pending, we also display a nice spinning image to notify the user of uploading activity.</p>
<h3 id="5-add-some-styling">5. Add some styling</h3>
<p>Stylings are not the focus of this tutorial, so you can get all of the SCSS styles in this <a href="https://gist.github.com/Jerga99/7fe7b1942c6e5bbe4723f2369c760649" rel="noopener">link</a>.</p>
<p><strong>Job done! :) That should be it for a simple image upload. If something is not clear, make sure you watched the first part of this tutorial first.</strong></p>
<p>If you like this tutorial, feel free to check my full course on Udemy<strong> — <a href="http://bit.ly/2NeWna4" rel="noopener">The Complete Angular, React &amp; Node Guide | Airbnb style app</a>.</strong></p>
<p><strong>Completed Project:</strong> <a href="https://github.com/Jerga99/bwm-ng" rel="noopener">My GitHub repository</a></p>
<p><strong>Video Lecture</strong>: <a href="https://www.youtube.com/watch?v=wNqwExw-ECw" rel="noopener">YouTube Tutorial</a></p>
<p>Cheers,</p>
<p>Filip</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
