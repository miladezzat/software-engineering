---
card: "https://cdn-media-1.freecodecamp.org/images/1*uhTVA1yCPB-M6s0MPiaBtg.png"
tags: [Deep Learning]
description: by Chenhua Zhu
author: "Milad E. Fahmy"
title: "Introducing TensorSpace.js — A Way to 3D Visualize Neural Networks in Browsers"
created: "2021-08-15T19:40:31+02:00"
modified: "2021-08-15T19:40:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-deep-learning tag-machine-learning tag-javascript tag-data-visualization tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Introducing TensorSpace.js — A Way to 3D Visualize Neural Networks in Browsers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*uhTVA1yCPB-M6s0MPiaBtg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*uhTVA1yCPB-M6s0MPiaBtg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*uhTVA1yCPB-M6s0MPiaBtg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*uhTVA1yCPB-M6s0MPiaBtg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*uhTVA1yCPB-M6s0MPiaBtg.png" alt="Introducing TensorSpace.js — A Way to 3D Visualize Neural Networks in Browsers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Chenhua Zhu</p>
<h1 id="introducing-tensorspace-js-a-way-to-3d-visualize-neural-networks-in-browsers">Introducing TensorSpace.js — A Way to 3D Visualize Neural Networks in Browsers</h1>
<figcaption>Feature Abstractions of a Tiger Cat Image</figcaption>
</figure>
<p>Neural networks were always something high-level, unreachable and mysterious before I took my first deep learning class. To me they were just magic: neural network applications could complete tasks on object detection, image classification and even data prediction in our daily lives.</p>
<p><em>“What does the model compute?” “Why should we use this specific network for this task?” “How could others come up with a structure like this?”</em></p>
<p>Maybe you have the same questions as I had. My friends and I have found that sometimes it is really hard to understand and explain neural networks. Then we came up with some ideas:</p>
<p><em>Why not visualize a neural network? </em><br><em>How about a 3D model? </em><br><em>It can be interactive!</em></p>
<p>Since no such thing existed that we could find, we thought, why not create one ourselves? After 6 months, I am proud to introduce our effort: <a href="https://github.com/tensorspace-team/tensorspace" rel="noopener">TensorSpace.js</a>.</p>
<h3 id="what-is-tensorspace-js">What is TensorSpace.js?</h3>
<figcaption><strong>Fig. 1</strong> — Interactive LeNet model created by TensorSpace.js</figcaption>
</figure>
<blockquote>TensorSpace.js is a neural network 3D visualization framework built with TensorFlow.js, Three.js and Tween.js.</blockquote>
<p>Since we wanted to be able to easily present the models in most web browsers, we choose JavaScript to implement the framework.</p>
<p>From Fig. 1 above, you can easily check out the model structure: each “cube” represents a “layer” object in the neural network.</p>
<p>Next, you can actually interact with the model by clicking, dragging and scrolling. Different angles may provide different view points of the model. Some objects are expandable, which allows you to observe more details.</p>
<p>Furthermore, we designed a hybrid architecture for TensorSpace.js to support different libraries, such as TensorFlow, Keras, and TensorFlow.js (more to come in the future).</p>
<p>TensorSpace.js can not only show the basic model structure, but also present the processes of internal feature abstractions, intermediate data manipulations, and final inference generations.</p>
<p>In summary, TensorSpace.js is:</p>
<ul>
<li><strong>Interactive</strong> — Uses Keras-like API to build interactive models in browsers.</li>
<li><strong>Intuitive</strong> — Visualizes the information from intermediate inferences.</li>
<li><strong>Integrative</strong> — Supports pre-trained models from TensorFlow, Keras, and TensorFlow.js.</li>
</ul>
<h3 id="how-does-tensorspace-js-work">How does TensorSpace.js work?</h3>
<p>The following part introduces how to build a TensorSpace model. I’m using an LeNet handwritten recognition model as an example. You can find all the example files from the repo here: <a href="http://repo" rel="noopener">TensorSpace — HelloWorld</a>.</p>
<figcaption><strong>Fig. 2</strong> — Workflow to present a TensorSpace model</figcaption>
</figure>
<p>The general workflow is to create or preprocess a pre-trained model with multiple intermediate outputs. Then, based on the neural network structure, we can build a TensorSpace model. Last, we load and initialize the model which can accept input data for inferences.</p>
<p>After correctly <a href="https://tensorspace.org/html/docs/startInstall.html" rel="noopener">installing TensorSpace.js</a> and properly <a href="https://tensorspace.org/html/docs/preIntro.html" rel="noopener">preprocessing the pre-trained models</a>, we can easily create an LeNet handwritten recognition TensorSpace model. For convenience, we use the <a href="https://github.com/tensorspace-team/tensorspace/tree/master/examples/helloworld/model" rel="noopener">preprocessed TensorSpace compatible model</a> and an <a href="https://github.com/tensorspace-team/tensorspace/blob/master/examples/helloworld/data/5.json" rel="noopener">extracted file</a> which is a handwritten “5” as the model input.</p><pre><code>let container = document.getElementById( "container" );</code></pre><pre><code>// Create sequential modellet model = new TSP.models.Sequential( container );</code></pre><pre><code>// Add LeNet Layersmodel.add( new TSP.layers.GreyscaleInput({ shape: [28, 28, 1] }) );model.add( new TSP.layers.Padding2d({ padding: [2, 2] }) );model.add( new TSP.layers.Conv2d({ kernelSize: 5, filters: 6, strides: 1 }) );model.add( new TSP.layers.Pooling2d({ poolSize: [2, 2], strides: [2, 2] }) );model.add( new TSP.layers.Conv2d({ kernelSize: 5, filters: 16, strides: 1 }) );model.add( new TSP.layers.Pooling2d({ poolSize: [2, 2], strides: [2, 2] }) );model.add( new TSP.layers.Dense({ units: 120 }) );model.add( new TSP.layers.Dense({ units: 84 }) );model.add( new TSP.layers.Output1d({    units: 10,    outputs: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}) );</code></pre><pre><code>// Load preprocessed modelmodel.load({    type: "tfjs",    url: './lenetModel/mnist.json'});</code></pre><pre><code>// Initialize the model in the browsermodel.init(function() {    // Predict input "5"    model.predict( image_5 ); });</code></pre>
<p>That’s it!</p>
<p>You can try it out in the CodePen:</p>
<p><a href="https://codepen.io/syt123450/pen/667a7943b0f23727790ca38c93389689/" rel="noopener"><em>View in CodePen</em></a><em>.</em></p>
<p>It is easy to build other preprocessed models in the same way. If you are interested, please check out our <a href="https://tensorspace.org/html/playground/index.html" rel="noopener">playground</a> for more interesting demos, such as Yolov2-tiny, ACGAN, and ResNet-50.</p>
<h3 id="when-should-you-use-it">When should you use it?</h3>
<p>If you want to present your model to others, explain some detailed features of the model, or build a demo from scratch, I think TensorSpace can be a good tool to describe the model intuitively and clearly. It is fun to interact with and explore the model you just built.</p>
<h3 id="conclusion"><strong>Conclusion</strong></h3>
<p>My team and I hope TensorSpace can, at least, help you move a little step forward on how you visualize neural networks. We believe this will attract more people to this field.</p>
<p>For further information about TensorSpace.js, please check out:</p>
<ul>
<li>Official Website: <a href="https://tensorspace.org/" rel="noopener">TensorSpace.org</a></li>
<li>GitHub Repository: <a href="https://github.com/tensorspace-team/tensorspace" rel="noopener">TensorSpace-Team/TensorSpace</a>.</li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
