---
card: "https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg"
tags: [Google]
description: "by Bharath Raj"
author: "Milad E. Fahmy"
title: "How to Upload large files to Google Colab and remote Jupyter notebooks"
created: "2021-08-16T15:41:04+02:00"
modified: "2021-08-16T15:41:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-google tag-machine-learning tag-python tag-data-science tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to Upload large files to Google Colab and remote Jupyter notebooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg" alt="How to Upload large files to Google Colab and remote Jupyter notebooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
cd Dropbox-Uploader
!chmod +x dropbox_uploader.sh</code></pre><p><strong>Step 3: Create an Access Token</strong></p><p>Execute the following command to see the initial setup instructions.</p><pre><code>!bash dropbox_uploader.sh</code></pre><p>It will display instructions on how to obtain the access token, and will ask you to execute the following command. Replace the bold letters with your access token, then execute:</p><pre><code class="language-bash">!echo "INPUT_YOUR_ACCESS_TOKEN_HERE" &gt; token.txt</code></pre><p>Execute <strong>!bash dropbox_uploader.sh</strong> again to link your Dropbox account to Google Colab. Now you can download and upload files from the notebook.</p><p><strong>Step 4: Transfer Contents</strong></p><p><strong>Download to Colab from Dropbox:</strong></p><p>Execute the following command. The argument is the name of the file on Dropbox.</p><pre><code class="language-bash">!bash dropbox_uploader.sh download YOUR_FILE.tar</code></pre><p><strong>Upload to Dropbox from Colab:</strong></p><p>Execute the following command. The first argument (result_on_colab.txt) is the name of the file you want to upload. The second argument (dropbox.txt) is the name you want to save the file as on Dropbox.</p><pre><code class="language-bash">!bash dropbox_uploader.sh upload result_on_colab.txt dropbox.txt</code></pre><h4 id="2-google-drive">2. Google Drive</h4><p>Google Drive offers upto 15GB free storage for every Google account. This sets an upper limit on the amount of data that you can transfer at any moment. You can always expand this limit to larger amounts. Colab simplifies the authentication process for Google Drive.</p><p>That being said, I’ve also included the necessary modifications you can perform, so that you can access Google Drive from other Python notebook services as well.</p><p><strong>Step 1: Archive and Upload</strong></p><p>Just as with Dropbox, uploading a large number of images (or files) individually will take a very long time, since Google Drive has to individually assign IDs and attributes to every image. So I recommend that you archive your dataset first.</p><p>One possible method of archiving is to convert the folder containing your dataset into a ‘.tar’ file. The code snippet below shows how to convert a folder named “Dataset” in the home directory to a “dataset.tar” file, from your Linux terminal.</p><pre><code class="language-bash">tar -cvf dataset.tar ~/Dataset</code></pre><p>And again, you can use WinRar or 7zip if you prefer. Upload the archived dataset to Google Drive.</p><p><strong>Step 2: Install dependencies</strong></p><p>Open Google Colab and start a new notebook. Install PyDrive using the following command:</p><pre><code class="language-bash">!pip install PyDrive</code></pre><p>Import the necessary libraries and methods (The <strong>bold </strong>imports are only required for Google Colab. Do not import them if you’re not using Colab).</p><pre><code class="language-py">import os
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from google.colab import auth
from oauth2client.client import GoogleCredentials</code></pre><p><strong>Step 3: Authorize Google SDK</strong></p><p><strong>For Google Colab:</strong></p><p>Now, you have to authorize Google SDK to access Google Drive from Colab. First, execute the following commands:</p><pre><code class="language-py">auth.authenticate_user()
gauth = GoogleAuth()
gauth.credentials = GoogleCredentials.get_application_default()
gauth.CommandLineAuth()
drive = GoogleDrive(gauth)</code></pre><p>The rest of the procedure is<strong> similar</strong> to that of Google Colab.</p><p><strong>Step 4: Obtain your File’s ID</strong></p><p>Enable link sharing for the file you want to transfer. Copy the link. You may get a link such as this:</p><pre><code>https://drive.google.com/open?id=YOUR_FILE_ID</code></pre><p>Copy only the bold part of the above link.</p><p><strong>Step 5: Transfer contents</strong></p><p><strong>Download to Colab from Google Drive:</strong></p><p>Execute the following commands. Here, <strong>YOUR_FILE_ID</strong> is obtained in the previous step, and <strong>DOWNLOAD.tar</strong> is the name (or path) you want to save the file as.</p><pre><code class="language-py">download = drive.CreateFile({'id': 'YOUR_FILE_ID'})
download.GetContentFile('DOWNLOAD.tar')</code></pre><p><strong>Upload to Google Drive from Colab:</strong></p><p>Execute the following commands. Here, <strong>FILE_ON_COLAB.txt </strong>is the name (or path) of the file on Colab, and <strong>DRIVE.txt </strong>is the name (or path) you want to save the file as (On Google Drive).</p><pre><code class="language-py">upload = drive.CreateFile({'title': 'DRIVE.txt'})
upload.SetContentFile('FILE_ON_COLAB.txt')
upload.Upload()</code></pre><h3 id="transferring-smaller-files">Transferring Smaller Files</h3><p>Occasionally, you may want to pass just one csv file and don’t want to go through this entire hassle. No worries — there are much simpler methods for that.</p><h4 id="1-google-colab-files-module">1. Google Colab files module</h4><p>Google Colab has its inbuilt <strong>files module</strong>, with which you can upload or download files. You can import it by executing the following:</p><pre><code>from google.colab import files</code></pre><p><strong>To Upload:</strong></p><p>Use the following command to upload files to Google Colab:</p><pre><code class="language-py">files.upload()</code></pre><p>You will be presented with a GUI with which you can select the files you want to upload. It is <strong>not recommended</strong> to use this method for files of large sizes. It is very slow.</p><p><strong>To Download:</strong></p><p>Use the following command to download a file from Google Colab:</p><pre><code class="language-py">files.download('example.txt')</code></pre><p>This feature works best in <strong>Google Chrome</strong>. In my experience, it only worked once on Firefox, out of about 10 tries.</p><h4 id="2-github">2. GitHub</h4><p>This is a “hack-ish” way to transfer files. You can create a GitHub repository with the small files that you want to transfer.</p><p>Once you create the repository, you can just clone it in Google Colab. You can then push your changes to the remote repository and pull the updates onto your local system.</p><p>But do note that GitHub has a hard limit of 25MB per file, and a soft limit of 1GB per repository.</p><blockquote>Thank you for reading this article! Leave some claps if you it interesting! If you have any questions, you could hit me up on <a href="https://thatbrguy.github.io/" rel="noopener">social media</a> or send me an email (bharathrajn98[at]gmail[dot]com).</blockquote>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
