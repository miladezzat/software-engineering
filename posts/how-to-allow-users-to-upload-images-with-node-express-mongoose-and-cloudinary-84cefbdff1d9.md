---
card: "https://cdn-media-1.freecodecamp.org/images/0*ETsmhAGOpiWfK06i"
tags: [JavaScript]
description: "Are you building a full-stack app and want to let users uploa"
author: "Milad E. Fahmy"
title: "How to allow users to upload images with Node/Express, Mongoose, and Cloudinary"
created: "2021-08-16T11:38:26+02:00"
modified: "2021-08-16T11:38:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-mongoose tag-nodejs tag-technology tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">How to allow users to upload images with Node/Express, Mongoose, and Cloudinary</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*ETsmhAGOpiWfK06i 300w,
https://cdn-media-1.freecodecamp.org/images/0*ETsmhAGOpiWfK06i 600w,
https://cdn-media-1.freecodecamp.org/images/0*ETsmhAGOpiWfK06i 1000w,
https://cdn-media-1.freecodecamp.org/images/0*ETsmhAGOpiWfK06i 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*ETsmhAGOpiWfK06i" alt="How to allow users to upload images with Node/Express, Mongoose, and Cloudinary">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Are you building a full-stack app and want to let users upload an image but you’re not sure how? In my experience, this is always achieved by having users input a link and saving this string to your database. This works great and is quick and easy, but it’s also kind of cheating. What kind of app makes you first go to another site and upload your image, and then come back and link to it?</p><p>So, what’s the solution?</p><p>Allow the user to input a file, then on your server, upload this file to a cloud service and save this in your database. Cloudinary is great for this. It’s dedicated to media uploads. It has great documentation. It allows for transformations. <strong>And</strong> has a huge free plan (10 GB storage). You can sign up for <a href="https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/yytj9stwvdsschwyccf8">Cloudinary here</a> (I get nothing for this).</p><h3 id="let-s-get-started-on-the-front-end">Let’s get started on the front-end</h3><pre><code class="language-html">&lt;form action='/api/images' method="post" enctype="multipart/form-data"&gt;
&lt;input type='file' name='image' /&gt;
&lt;/form&gt;</code></pre><p>This should look familiar. All you need is a form which will submit the information to the server. Enctype is required for submitting files to the server.</p><p>That’s the front-end solved.</p><h3 id="the-back-end">The back-end</h3><p>Now, the back-end is where all the magic happens. You will need all the usual dependencies for working with <strong>Express</strong> and <strong>Mongoose</strong>. In addition, we will utilise <strong>Multer</strong>, <strong>Cloudinary</strong>, and <strong>multer-storage-cloudinary</strong>. Multer will allow access to files submitted through the form. Cloudinary is used for configuration and uploading. multer-storage-cloudinary will make the process of combining these easy.</p><pre><code class="language-js">const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");</code></pre><p>Once the dependencies are required you need to configure them. When you sign up to Cloudinary, you will be provided your API credentials. I recommend storing these in a “.env” file to keep them secure.</p><p>Below we are also:</p><ul><li>setting a folder to keep all the images organised on Cloudinary for this project</li><li>ensuring only “.jpg” and “.png” files are uploaded</li><li>adding a transformation to keep the height and width consistent and to manage file size.</li></ul><p>There’s a lot more you can do in regards to transformations — you can take a look <a href="https://cloudinary.com/documentation/image_transformations" rel="noopener">here</a> if you are interested.</p><pre><code class="language-js">cloudinary.config({
cloud_name: process.env.CLOUD_NAME,
api_key: process.env.API_KEY,
api_secret: process.env.API_SECRET
});
const storage = cloudinaryStorage({
cloudinary: cloudinary,
folder: "demo",
allowedFormats: ["jpg", "png"],
transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });</code></pre><p>Now that your server is all set up to receive and process these images, we can move onto setting up the route.</p><p>In your post route, you simply add the parser we set up before as a middleware. This will take in the file, upload it to Cloudinary, and return an object with the file information. You can access this information in the request object.</p><p>I like to extract just the information I want from this, to keep my database organised. At the least, you will want:</p><ul><li>the URL which can be used to display the image on the front-end</li><li>the public_id which will allow you to access and delete the image from Cloudinary.</li></ul><pre><code class="language-js">app.post('/api/images', parser.single("image"), (req, res) =&gt; {
console.log(req.file) // to see what is returned to you
const image = {};
image.url = req.file.url;
image.id = req.file.public_id;
Image.create(image) // save image information in database
.then(newImage =&gt; res.json(newImage))
.catch(err =&gt; console.log(err));
});</code></pre><p>Your image will probably be part of a larger object in your database. The image URL and id can be saved as strings as a part of this.</p><p><em>*Image is an example placeholder for your database collection. Substitute it for your own.</em></p><h3 id="displaying-the-image">Displaying the image</h3><p>When you want to display the image on the front-end, perform a database query, and then use the URL inside your image tags <code>&lt;img src=imageURL</code> /&gt;.</p><p>I hope this will help you in adding that little extra to your websites. It’s not that difficult once you break down each step in the process. It will give your website the professional touch and will make it stand out.</p><p>If you have any questions, please ask in the comments.</p>
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
