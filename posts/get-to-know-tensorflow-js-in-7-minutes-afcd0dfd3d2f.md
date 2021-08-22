---
card: "https://cdn-media-1.freecodecamp.org/images/0*aPXPaPQHeHnMHq-j"
tags: [Machine Learning]
description: by ADL
author: "Milad E. Fahmy"
title: "Get to know TensorFlow.js in 7 minutes"
created: "2021-08-15T19:43:28+02:00"
modified: "2021-08-15T19:43:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-tensorflow tag-javascript tag-deep-learning tag-artificial-intelligence ">
<header class="post-full-header">
<h1 class="post-full-title">Get to know TensorFlow.js in 7 minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*aPXPaPQHeHnMHq-j 300w,
https://cdn-media-1.freecodecamp.org/images/0*aPXPaPQHeHnMHq-j 600w,
https://cdn-media-1.freecodecamp.org/images/0*aPXPaPQHeHnMHq-j 1000w,
https://cdn-media-1.freecodecamp.org/images/0*aPXPaPQHeHnMHq-j 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*aPXPaPQHeHnMHq-j" alt="Get to know TensorFlow.js in 7 minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by ADL</p>
<h4 id="and-learn-how-you-can-run-ml-dl-models-directly-in-the-browser">And learn how you can run ML/DL models directly in the browser</h4>
<p>An increasing number of developers are using TensorFlow in their machine learning projects. In March this year, the TensorFlow team at Google announced the arrival of the much-awaited JavaScript framework, TensorFlow.js (which was previously called DeepLearn.js).</p>
<figcaption>Image Source : Tensorflow.js Website</figcaption>
</figure>
<p>Now developers can build lightweight models and run them in the browser using JavaScript. Let’s understand what the need was for the development of this framework.</p>
<h4 id="history">History</h4>
<p>Before going to TensorFlow.js, I would like to start off with TensorFlow.</p>
<p>TensorFlow was developed in 2011 at Google as their propitiatory library for Machine learning/Deep learning applications at Google. This library was open sourced in 2015 under the Apache License.</p>
<p>TensorFlow is built in C++, which enables the code to execute at a very low level. TensorFlow has bindings to different language like Python, R, &amp; Java. This enables TensorFlow to be used in these languages.</p>
<p>So, the obvious question is: what about JavaScript?</p>
<p>Conventionally, in JavaScript, ML/DL was performed by using an API. An API was made using some framework, and the model was deployed at the server. The client sent a request using JavaScript to get results from the server.</p>
<figcaption>Client Server Architecture</figcaption>
</figure>
<p>In 2017, a project called Deeplearn.js appeared, which aimed to enable ML/DL in JavaScript, without the API hassle.</p>
<p>But there were questions about speed. It was very well known that JavaScript code could not run on GPU. To solve this problem, WebGL was introduced. This is a browser interface to OpenGL. WebGL enabled the execution of JavaScript code on GPU.</p>
<p>In March 2018, the DeepLearn.js team got merged into the TensorFlow Team at Google and was renamed TensorFlow.js.</p>
<p>Watch the below video for further details:</p>
<h3 id="tensorflow-js">TensorFlow.js</h3>
<p>Tensorflow.js provides two things:</p>
<ul>
<li>The CoreAPI, which deals with the low level code</li>
<li>LayerAPI is built over the CoreAPI, and makes our lives easier by increasing the level of abstraction.</li>
</ul>
<h4 id="getting-started">Getting Started</h4>
<p>There are two main ways to get TensorFlow.js in your project:</p>
<h4 id="1-via-script-tag">1. via &lt;script&gt; Tag</h4>
<p>Add the following code to an HTML file:</p><pre><code>&lt;html&gt;  &lt;head&gt;    &lt;!-- Load TensorFlow.js --&gt;    &lt;script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.12.0"&gt; &lt;/script&gt;  &lt;/head&gt;</code></pre><pre><code>&lt;body&gt;      Hello  &lt;/body&gt;&lt;/html&gt;</code></pre>
<h4 id="2-via-npm">2. via NPM</h4>
<p>Add TensorFlow.js to your project using yarn or npm.</p><pre><code>yarn add @tensorflow/tfjs</code></pre><pre><code>npm install @tensorflow/tfjs</code></pre>
<p>In your main js file:</p><pre><code>import * as tf from '@tensorflow/tfjs';</code></pre>
<h3 id="coreapi">CoreAPI</h3>
<h4 id="1-tensors">1. Tensors</h4>
<p>So, what is a Tensor ?</p>
<ul>
<li>A scalar is a single number. For example, x = 1</li>
<li>A vector is an array of numbers. For example, <em>x</em>=[1,2]</li>
<li>A matrix is a 2-D array<br>([[1, 2],<br> [3, 4],<br> [5, 6]])</li>
<li>A tensor is a <em>n-</em>dimensional array with <em>n</em>&gt;2</li>
</ul>
<p>TensorFlow.js has utility functions for common cases like Scalar, 1D, 2D, 3D and 4D tensors, as well a number of functions to initialize tensors in ways useful for machine learning.</p>
<h4 id="code-examples">Code Examples</h4>
<p>tf.tensor():</p><pre><code>// Pass an array of values to create a vector.tf.tensor([1, 2, 3, 4]).print();</code></pre>
<p>tf.scalar():</p><pre><code>tf.scalar(3.14).print();</code></pre>
<p>And so on…</p>
<p>Watch the Below Video to get a deep insight into Tensors in TensorFlow.js:</p>
<h4 id="2-variables-operations">2. Variables &amp; Operations</h4>
<p>Tensors are immutable data structures. That means their values can’t be changed once they are set.</p>
<p>However,<strong> </strong><code>tf.variable()</code><strong> </strong>is introduced in TensorFlow.js. The real use case for <code>tf.variable()</code> is when we need to change the data frequently, such as when adjusting model weights in Machine Learning.</p>
<p>Code sample:</p><pre><code>const x = tf.variable(tf.tensor([1, 2, 3]));x.assign(tf.tensor([4, 5, 6]));x.print();</code></pre>
<h4 id="operations">Operations</h4>
<p>There are various operations in TensorFlow.js. In order to perform mathematical computation on Tensors, we use operations. Tensors are immutable, so all operations always return new Tensors and never modify input Tensors. So<code> tf.variable()</code> can be used in order to save memory.</p>
<p>Let’s look into some operations:</p>
<p><strong>tf.add() — Adds two <a href="https://js.tensorflow.org/api/0.12.0/#class:Tensor" rel="noopener">tf.Tensor</a>s element-wise</strong></p><pre><code>const a = tf.tensor1d([1, 2, 3, 4]);const b = tf.tensor1d([10, 20, 30, 40]);a.add(b).print();  // or tf.add(a, b)</code></pre>
<p>There are many operations in TensorFlow.js. You can check the <a href="https://js.tensorflow.org/api/0.12.0/#Operations" rel="noopener">documentation</a> for other operations. I will demonstrate one more operation here: <strong>tf.matmul()</strong></p>
<p><strong>tf.matmul() — Computes the dot product of two matrices, A * B.</strong></p><pre><code>const a = tf.tensor2d([1, 2], [1, 2]);const b = tf.tensor2d([1, 2, 3, 4], [2, 2]);</code></pre><pre><code>a.matMul(b).print();  // or tf.matMul(a, b)</code></pre>
<p>Watch the below video for deep insight into Variable and Operations:</p>
<h4 id="3-memory-management"><strong>3. Memory Management</strong></h4>
<p>Memory management is the key in Machine Learning/Deep Learning tasks, because they are generally computationally expensive.</p>
<p>TensorFlow.js provides two major ways to manage memory:</p>
<ol>
<li>tf.dispose()</li>
<li>tf.tidy()</li>
</ol>
<p>They both typically do the same thing, but they do it in different ways.</p>
<h4 id="tf-tidy-">tf.tidy()</h4>
<p>This executes the provided function <code>fn</code> and after it is executed, cleans up all intermediate tensors allocated by <code>fn</code> except those returned by <code>fn</code>.</p>
<p><code>tf.tidy()</code> helps avoid memory leaks. In general, it wraps calls to operations in <code><a href="https://js.tensorflow.org/api/0.12.0/#tidy" rel="noopener">tf.tidy()</a></code> for automatic memory cleanup.</p>
<p>Code example:</p><pre><code>const y = tf.tidy(() =&gt; {   // aa, b, and two will be cleaned up when the tidy ends.   const two= tf.scalar(2);   const aa = tf.scalar(2);   const b = aa.square();   console.log('numTensors (in tidy): ' + tf.memory().numTensors);   // The value returned inside the tidy function will return   // through the tidy, in this case to the variable y.   return b.add(two);});console.log('numTensors (outside tidy): ' + tf.memory().numTensors);y.print();</code></pre>
<h4 id="tf-dispose-">tf.dispose()</h4>
<p>Disposes any <a href="https://js.tensorflow.org/api/0.12.0/#class:Tensor" rel="noopener">tf.Tensor</a>s found within the mentioned object.</p>
<p>Code example:</p><pre><code>const two= tf.scalar(2);</code></pre><pre><code>two.dispose()</code></pre>
<h3 id="layersapi">LayersAPI</h3>
<p>Layers are the primary building block for constructing a ML/DL Model. Each layer will typically perform some computation to transform its input to its output. Under the hood, every layer uses the CoreAPI of Tensorflow.js.</p>
<p>Layers will automatically take care of creating and initializing the various internal variables/weights they need to function. So, basically it makes life easier by increasing the level of abstraction.</p>
<p>We will make a simple example feed forward network using the LayerAPI. The Feed Forward network we will build is as below:</p>
<figcaption>Image is my own</figcaption>
</figure>
<h4 id="code-">Code:</h4>
<p>Index.html</p><pre><code>&lt;html&gt;&lt;head&gt;&lt;title&gt;&lt;/title&gt;&lt;script src=”https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.12.0"&gt; &lt;/script&gt;&lt;script src=”main.js” type=”text/javascript”&gt;&lt;/script&gt;</code></pre><pre><code>&lt;/head&gt;</code></pre><pre><code>&lt;body&gt;Tensorflow JS Demo</code></pre><pre><code>&lt;/body&gt;&lt;/html&gt;</code></pre>
<p>main.js</p><pre><code>const model = tf.sequential();</code></pre><pre><code>//config for layerconst config_hidden = {  inputShape:[3],  activation:'sigmoid',  units:4}const config_output={  units:2,  activation:'sigmoid'}</code></pre><pre><code>//defining the hidden and output layerconst hidden = tf.layers.dense(config_hidden);const output = tf.layers.dense(config_output);</code></pre><pre><code>//adding layers to modelmodel.add(hidden);model.add(output);</code></pre><pre><code>//define an optimizerconst optimize=tf.train.sgd(0.1);</code></pre><pre><code>//config for modelconst config={optimizer:optimize,loss:'meanSquaredError'}</code></pre><pre><code>//compiling the modelmodel.compile(config);</code></pre><pre><code>console.log('Model Successfully Compiled');</code></pre><pre><code>//Dummy training dataconst x_train = tf.tensor([  [0.1,0.5,0.1],  [0.9,0.3,0.4],  [0.4,0.5,0.5],  [0.7,0.1,0.9]])</code></pre><pre><code>//Dummy training labelsconst y_train = tf.tensor([  [0.2,0.8],  [0.9,0.10],  [0.4,0.6],  [0.5,0.5]])</code></pre><pre><code>//Dummy testing dataconst x_test = tf.tensor([  [0.9,0.1,0.5]])</code></pre><pre><code>train_data().then(function(){  console.log('Training is Complete');  console.log('Predictions :');  model.predict(x_test).print();})</code></pre><pre><code>async function train_data(){  for(let i=0;i&lt;10;i++){  const res = await model.fit(x_train,y_train,epoch=1000,batch_size=10);   console.log(res.history.loss[0]);  }}</code></pre>
<p>Output:</p>
<p>Watch the below videos for deep insight and code explanation:</p>
<p>I understand that this is a small overview on the Tensorflow.js Library. I feel this can be a starting point before you read the <a href="https://js.tensorflow.org/api/0.12.0/" rel="noopener">documentation</a> and go through some real world applications.</p>
<p>I will be posting real world examples using TensorFlow.js as below:</p>
<p>More Real world examples coming soon…<a href="https://goo.gl/u72j6u" rel="noopener">Stay Tuned</a>…</p>
<h3 id="my-take-on-this">My take on this</h3>
<p>This is excellent for coders who are familiar with JavaScript and are trying to find their way in the ML/DL world!</p>
<p>It makes things a lot simpler for people coming from a non-ML/DL background, but who are looking to understand this field. The use cases for this are many, and I personally think it’s something we need at the moment.</p>
<p>In my next article and video, I will talk about <a href="https://ml5js.org/" rel="noopener">ML5</a> which is built over TensorFlow.js. <a href="https://ml5js.org/" rel="noopener">ML5</a> is built at New York University and is under active development.</p>
<p>What do you think about TensorFlow.js? Let me know in the comments section below. If you like this article, you would also like my <a href="https://goo.gl/u72j6u" rel="noopener">Videos on Youtube.</a></p>
<p>If you liked my article, <strong>please click the ? below A</strong>nd follow me on M<strong>edium </strong>&amp; :</p>
<p>If you have any questions, please let me know in a comment below or <a href="https://twitter.com/I_AM_ADL" rel="noopener"><strong>Twitter</strong></a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
