---
card: "https://cdn-media-1.freecodecamp.org/images/1*Z6kowWUGajls6aYusTy4oA.jpeg"
tags: [Artificial Intelligence]
description: "In this article, I’ll show you how to create and train a neur"
author: "Milad E. Fahmy"
title: "How to create a Neural Network in JavaScript in only 30 lines of code"
created: "2021-08-16T11:49:59+02:00"
modified: "2021-08-16T11:49:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-artificial-intelligence tag-machine-learning tag-data-science tag-javascript tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Neural Network in JavaScript in only 30 lines of code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Z6kowWUGajls6aYusTy4oA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Z6kowWUGajls6aYusTy4oA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Z6kowWUGajls6aYusTy4oA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Z6kowWUGajls6aYusTy4oA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Z6kowWUGajls6aYusTy4oA.jpeg" alt="How to create a Neural Network in JavaScript in only 30 lines of code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
var learningRate = .3;
for (var i = 0; i &lt; 20000; i++) {
// 0,0 =&gt; 0
myNetwork.activate([0,0]);
myNetwork.propagate(learningRate, [0]);
// 0,1 =&gt; 1
myNetwork.activate([0,1]);
myNetwork.propagate(learningRate, [1]);
// 1,0 =&gt; 1
myNetwork.activate([1,0]);
myNetwork.propagate(learningRate, [1]);
// 1,1 =&gt; 0
myNetwork.activate([1,1]);
myNetwork.propagate(learningRate, [0]);
}
</code></pre><p>Here we’re running the network 20,000 times. Each time we propagate forward and backwards four times, passing in the four possible inputs for this network: <code>[0,0] [0,1] [1,0] [1,1]</code> .</p><p>We start by doing <code>myNetwork.activate([0,0])</code> , where <code>[0,0]</code> is the data point we’re sending into the network. This is the forward propagation, also called <strong>activating</strong> &nbsp;the network. After each forward propagation, we need to do a backpropagation, where the network updates it’s own weights and biases.</p><p>The backpropagation is done with this line of code: <code>myNetwork.propagate(learningRate, [0])</code>, where the <code>learningRate</code> is a constant that tells the network how much it should adjust its weights each time. The second parameter <code>0</code> represents the correct output given the input <code>[0,0]</code>.</p><p><strong>The network then compares its own prediction to the correct label. This tells it how right or wrong it was.</strong></p><p>It uses the comparison as a basis for correcting its own weights and bias values so that it will guess a little bit more correct the next time.</p><p>After it has done this process 20,000 times, we can check how well our network has learned by activating the network with all four possible inputs:</p><pre><code class="language-js">console.log(myNetwork.activate([0,0]));
// -&gt; [0.015020775950893527]
console.log(myNetwork.activate([0,1]));
// -&gt; [0.9815816381088985]
console.log(myNetwork.activate([1,0]));
// -&gt;  [0.9871822457132193]
console.log(myNetwork.activate([1,1]));
// -&gt; [0.012950087641929467]
</code></pre><p>If we round these values to the closest integer, we’ll get the correct answers for the XOR equation. Hurray!</p><p>And that’s about it. Even though we’ve just scratched the surface of neural networks, this should give you enough to start playing with Synaptic for yourself and continue learning on your own. <a href="https://github.com/cazala/synaptic/wiki">Their wiki</a> contains a lot of good tutorials.</p><p>Finally, be sure to share your knowledge by creating a <a href="http://scrimba.com?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gneuralnetworks_create_neural_network">Scrimba</a> screencast or writing an article when you learn something new! :)</p><h2 id="ps-we-have-more-free-courses-for-you-">PS: We have more free courses for you!</h2><p>If you’re looking for your next challenge, we have several other free courses you can check out at <a href="https://scrimba.com/?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gneuralnetworks_create_neural_network">Scrimba.com.</a> Here are three might be relevant for you:</p><ul><li><a href="https://scrimba.com/g/gneuralnetworks?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gneuralnetworks_create_neural_network">Neural networks in JavaScript</a></li><li><a href="https://scrimba.com/g/gintrotoes6?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gneuralnetworks_create_neural_network">Introduction to ES6+</a></li><li><a href="https://scrimba.com/g/gd3js?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gneuralnetworks_create_neural_network">Learn D3 JS</a></li></ul><p>Happy coding!</p>
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
