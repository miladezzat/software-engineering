---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9fff740569d1a4ca4600.jpg"
tags: [Deep Learning]
description: "Neural Networks are like the workhorses of Deep learning. Wit"
author: "Milad E. Fahmy"
title: "How to build a Neural  Network from scratch"
created: "2021-08-16T15:38:26+02:00"
modified: "2021-08-16T15:38:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-deep-learning tag-artificial-intelligence tag-python tag-neural-networks tag-machine-learning ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a Neural  Network from scratch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9fff740569d1a4ca4600.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9fff740569d1a4ca4600.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9fff740569d1a4ca4600.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9fff740569d1a4ca4600.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9fff740569d1a4ca4600.jpg" alt="How to build a Neural  Network from scratch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import matplotlib.pyplot as plt</code></pre><p>As I mentioned we are not going to use any of the deep learning libraries. So, we will mostly use numpy for performing mathematical computations efficiently.</p><p>The first step in building our neural network will be to initialize the parameters. We need to initialize two parameters for each of the neurons in each layer: 1) <em>Weight</em> and 2) <em>Bias</em>. </p><p>These weights and biases are declared in <em>vectorized</em> form. That means that instead of initializing weights and biases for each individual neuron in every single layer, we will create a vector (or a matrix) for weights and another one for biases, for each layer. </p><p>These <em>weights</em> and <em>bias</em> vectors will be combined with the input to the layer. Then we will apply the sigmoid function over that combination and send that as the input to the next layer.</p><p><strong>layer_dims</strong><em> </em>holds the dimensions of each layer. We will pass these dimensions of layers to the <strong>init_parms</strong><em> </em>function which will use them to initialize parameters. These parameters will be stored in a dictionary called <strong>params</strong>. So in the params dictionary <strong>params['W1']</strong><em> </em>will represent the weight matrix for layer 1.</p><pre><code>def init_params(layer_dims):
np.random.seed(3)
params = {}
L = len(layer_dims)
for l in range(1, L):
params['W'+str(l)] = np.random.randn(layer_dims[l], layer_dims[l-1])*0.01
params['b'+str(l)] = np.zeros((layer_dims[l], 1))
return params</code></pre><p>Great! We have initialized the weights and biases and now we will define the <em>sigmoid function</em>. It will compute the value of the sigmoid function for any given value of <strong>Z</strong> and will also store this value as a cache. We will store cache values because we need them for implementing backpropagation. The<strong> Z</strong> here is the <em>linear hypothesis</em>.</p><p>Note that the sigmoid function falls under the class of <em>activation functions</em> in the neural network terminology. The job of an <em>activation function</em> is to shape the output of a neuron. </p><p>For example, the sigmoid function takes input with discrete values and gives a value which lies between zero and one. Its purpose is to convert the linear outputs to non-linear outputs. There are different types of <em>activation functions</em> that can be used for better performance but we will stick to sigmoid for the sake of simplicity.</p><pre><code># Z (linear hypothesis) - Z = W*X + b ,
# W - weight matrix, b- bias vector, X- Input
def sigmoid(Z):
A = 1/(1+np.exp(np.dot(-1, Z)))
cache = (Z)
return A, cache</code></pre><p>Now, let's start writing code for forward propagation. We have discussed earlier that <em>forward</em> <em>propagation</em> will take the values from the previous layer and give it as input to the next layer. The function below will take the <em>training data</em> and <em>parameters</em> as inputs and will generate output for one layer and then it will feed that output to the next layer and so on.</p><pre><code>def forward_prop(X, params):
A = X # input to first layer i.e. training data
caches = []
L = len(params)//2
for l in range(1, L+1):
A_prev = A
# Linear Hypothesis
Z = np.dot(params['W'+str(l)], A_prev) + params['b'+str(l)]
# Storing the linear cache
linear_cache = (A_prev, params['W'+str(l)], params['b'+str(l)])
# Applying sigmoid on linear hypothesis
A, activation_cache = sigmoid(Z)
# storing the both linear and activation cache
cache = (linear_cache, activation_cache)
caches.append(cache)
return A, caches</code></pre><p><strong>A_prev</strong><em> i</em>s input to the first layer. We will loop through all the layers of the network and will compute the linear hypothesis. After that it will take the value of <strong>Z </strong>(linear hypothesis) and will give it to the sigmoid activation function. Cache values are stored along the way and are accumulated in <strong>caches</strong>. Finally, the function will return the value generated and the stored cache.</p><p>Let's now define our cost function.</p><pre><code>def cost_function(A, Y):
m = Y.shape[1]
cost = (-1/m)*(np.dot(np.log(A), Y.T) + np.dot(log(1-A), 1-Y.T))
return cost</code></pre><p>As the value of the cost function decreases, the performance of our model becomes better. The value of the cost function can be minimized by updating the values of the parameters of each of the layers in the neural network. Algorithms such as <em>Gradient Descent</em> are used to update these values in such a way that the cost function is minimized.</p><p>Gradient Descent updates the values with the help of some updating terms. These updating terms called <em>gradients</em> are calculated using the backpropagation. Gradient values are calculated for each neuron in the network and it represents the change in the final output with respect to the change in the parameters of that particular neuron.</p><pre><code>def one_layer_backward(dA, cache):
linear_cache, activation_cache = cache
Z = activation_cache
dZ = dA*sigmoid(Z)*(1-sigmoid(Z)) # The derivative of the sigmoid function
A_prev, W, b = linear_cache
m = A_prev.shape[1]
dW = (1/m)*np.dot(dZ, A_prev.T)
db = (1/m)*np.sum(dZ, axis=1, keepdims=True)
dA_prev = np.dot(W.T, dZ)
return dA_prev, dW, db</code></pre><p>The code above runs the backpropagation step for one single layer. It calculates the gradient values for sigmoid units of one layer using the cache values we stored previously. In the activation cache we have stored the value of <strong>Z</strong> for that layer. Using this value we will calculate the <strong>dZ</strong>, which is the derivative of the cost function with respect to the linear output of the given neuron.</p><p>Once we have calculated all of that, we can calculate <strong>dW</strong>, <strong>db</strong> and <strong>dA_prev,</strong> which are the derivatives of cost function with respect the weights, biases and previous activation respectively. I have directly used the formulae in the code. If you are not familiar with calculus then it might seem too complicated at first. But for now think about it as any other math formula.</p><p>After that we will use this code to implement backpropagation for the entire neural network. The function <strong>backprop</strong> implements the code for that. Here, we have created a dictionary for mapping gradients to each layer. We will loop through the model in a backwards direction and compute the gradient. </p><pre><code>def backprop(AL, Y, caches):
grads = {}
L = len(caches)
m = AL.shape[1]
Y = Y.reshape(AL.shape)
dAL = -(np.divide(Y, AL) - np.divide(1-Y, 1-AL))
current_cache = caches[L-1]
grads['dA'+str(L-1)], grads['dW'+str(L-1)], grads['db'+str(L-1)] = one_layer_backward(dAL, current_cache)
for l in reversed(range(L-1)):
current_cache = caches[l]
dA_prev_temp, dW_temp, db_temp = one_layer_backward(grads["dA" + str(l+1)], current_cache)
grads["dA" + str(l)] = dA_prev_temp
grads["dW" + str(l + 1)] = dW_temp
grads["db" + str(l + 1)] = db_temp
return grads</code></pre><p>Once, we have looped through all the layers and computed the gradients, we will store those values in the <strong>grads</strong> dictionary and return it.</p><p>Finally, using these gradient values we will update the parameters for each layer. The function <strong>update_parameters</strong> goes through all the layers and updates the parameters and returns them.</p><pre><code>def update_parameters(parameters, grads, learning_rate):
L = len(parameters) // 2
for l in range(L):
parameters['W'+str(l+1)] = parameters['W'+str(l+1)] -learning_rate*grads['W'+str(l+1)]
parameters['b'+str(l+1)] = parameters['b'+str(l+1)] -  learning_rate*grads['b'+str(l+1)]
return parameters</code></pre><p>Finally, it's time to put it all together. We will create a function called <strong>train</strong> for training our neural network. </p><pre><code>def train(X, Y, layer_dims, epochs, lr):
params = init_params(layer_dims)
cost_history = []
for i in range(epochs):
Y_hat, caches = forward_prop(X, params)
cost = cost_function(Y_hat, Y)
cost_history.append(cost)
grads = backprop(Y_hat, Y, caches)
params = update_parameters(params, grads, lr)
return params, cost_history</code></pre><p>This function will go through all the functions step by step for a given number of <em>epochs</em>. After finishing that, it will return the final updated parameters and the cost history. Cost history can be used to evaluate the performance of your network architecture. </p><h2 id="conclusion">Conclusion</h2><p>If you are still reading this, Thanks! This article was a little complicated, so what I suggest you to do is to try playing around with the code. You might get some more insights out of it and maybe you might find some errors in the code too. If that is the case or if you have some questions or both, feel free to hit me up on <a href="https://twitter.com/aditya_dehal">twitter</a>. I will do my best to help you.</p><h2 id="resources">Resources</h2><ul><li><a href="https://youtu.be/aircAruvnKk">Neural Networks Playlist</a> - by 3Blue1Brown</li><li><a href="http://neuralnetworksanddeeplearning.com/chap1.html">Neural Networks and Deep Learning</a> &nbsp;- by Michael A. Nielsen</li><li><a href="https://www.quora.com/Whats-the-difference-between-gradient-descent-and-stochastic-gradient-descent/answer/Sebastian-Raschka-1">Gradient Descent and Stochastic Gradient Descent</a> </li></ul>
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
