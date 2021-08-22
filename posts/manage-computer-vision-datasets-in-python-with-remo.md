---
card: "/images/default.jpg"
tags: [Python]
description: "Computer Vision is one of the most important applications of "
author: "Milad E. Fahmy"
title: "How to Manage Computer Vision Datasets in Python with Remo"
created: "2021-08-16T15:35:08+02:00"
modified: "2021-08-16T15:35:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-computer-vision tag-machine-learning tag-data-science tag-data tag-data-analysis ">
<header class="post-full-header">
<h1 class="post-full-title">How to Manage Computer Vision Datasets in Python with Remo</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/12/d148d60c3269c7e0a3070eec97a5e497-1.png 300w,
/news/content/images/size/w600/2020/12/d148d60c3269c7e0a3070eec97a5e497-1.png 600w,
/news/content/images/size/w1000/2020/12/d148d60c3269c7e0a3070eec97a5e497-1.png 1000w,
/news/content/images/size/w2000/2020/12/d148d60c3269c7e0a3070eec97a5e497-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/12/d148d60c3269c7e0a3070eec97a5e497-1.png" alt="How to Manage Computer Vision Datasets in Python with Remo">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Computer Vision is one of the most important applications of Machine Learning. Some common commercial applications of Computer Vision are:</p><ul><li>Predictive maintenance for industrial infrastructure, oil and gas pipelines, and commercial real estate</li><li>Quality assurance automation</li><li>Landscape inventory and parcel management based on satellite imagery and drone footage</li></ul><p>And some of the most common techniques used in order to accomplish these kind of tasks are:</p><ul><li>Image Classification</li><li>Object Detection</li><li>Instance Segmentation</li></ul><p>During the past decade, many frameworks such as TensorFlow, Keras and PyTorch have been developed in order to make it easier to develop Computer Vision-based models. </p><p>But it is still relatively difficult to work with image data due to the necessary image pre-processing, labelling, and annotation visualization.</p><p>As part of this article, I am going to introduce you to <a href="https://remo.ai/">Remo</a>, a free Python library designed to help developers work on Computer Vision tasks. Remo can help you:</p><ul><li>Organize and visualize images and annotations</li><li>Efficiently annotate</li><li>Work and collaborate as a team on the data</li></ul><p>Remo can be used either in a Jupyter Notebook or in the Google Colab environment. In this article, all the code is going to be based on the Google Colab set-up and the full notebook is freely available at <a href="https://colab.research.google.com/drive/1G0X6ieL9_O5jbdpPPG72nulNhxKELwzd?usp=sharing">this link.</a></p><h2 id="how-remo-improves-image-management">How Remo Improves Image Management</h2><p>There are a number of legacy open annotation tools for images available out there. <a href="https://github.com/tzutalin/labelImg">LabelImg</a> is one of the most popular ones. </p><p>Compared to these tools, Remo offers smart tools to annotate more efficiently (for example, shortcuts and xclick draw) and functionalities that help you collaborate and organize your work. You can mark images as Done or To Do, sort them and search them, and so on – which is very useful when you're working with thousands of images.</p><p>But datasets management is where Remo is very innovative. At present, images in Computer Vision projects are usually stored as flat files in a local hard disk or some Cloud storage, and annotations are saved as raw XML/JSON/csv files. </p><p>To visualize them, you would usually either open each file individually and try to imagine where annotations are, or plot them one by one in Python. </p><p>Instead, Remo gives you full control and visibility of all the data.</p><h2 id="demonstration-of-how-remo-works">Demonstration of How Remo Works</h2><p>First of all, we need to install all the necessary dependencies. This can be easily done in Google Colab by running the following two lines of code:</p><pre><code class="language-python">!pip install remo
!python -m remo_app init --colab</code></pre><p>Once we've installed Remo, we can then create a dataset using some example images freely available on Amazon Web Services.</p><pre><code class="language-python">import remo
import pandas
link = ['https://remo-scripts.s3-eu-west-1.amazonaws.com/open_images_sample_dataset.zip']
df = remo.create_dataset(name = 'Example Images Dataset',
urls = link,
annotation_task = "Object Detection")
# Output
# Acquiring data - completed
# Processing annotation files: 1 of 1 files
# Processing data - completed
# Data upload completed</code></pre><p>By running the Remo <strong>list_datasets()<em> </em></strong>command we can then easily check what datasets we currently have available.</p><pre><code class="language-python">remo.list_datasets()
# Output
# Output
# [{'AnnotationSet ID': 1,
#  'AnnotationSet name': 'Object detection',
#  'creation_date': None,
#  'last_modified_date': '2020-11-28T22:04:48.263767Z',
#  'n_classes': 18,
#  'n_images': 10,
#  'n_objects': 98,
#  'top_3_classes': [{'count': 27, 'name': 'Fruit'},
#   {'count': 12, 'name': 'Sports equipment'},
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
