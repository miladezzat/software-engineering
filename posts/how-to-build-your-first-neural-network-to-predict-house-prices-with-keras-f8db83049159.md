---
card: "https://cdn-media-1.freecodecamp.org/images/1*93f3Bpwd9gZfy8xFl0mZrw.jpeg"
tags: [Data Science]
description: "by Joseph Lee Wei En"
author: "Milad E. Fahmy"
title: "How to build your first Neural Network to predict house prices with Keras"
created: "2021-08-16T11:30:50+02:00"
modified: "2021-08-16T11:30:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-science tag-machine-learning tag-deep-learning tag-technology tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build your first Neural Network to predict house prices with Keras</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*93f3Bpwd9gZfy8xFl0mZrw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*93f3Bpwd9gZfy8xFl0mZrw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*93f3Bpwd9gZfy8xFl0mZrw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*93f3Bpwd9gZfy8xFl0mZrw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*93f3Bpwd9gZfy8xFl0mZrw.jpeg" alt="How to build your first Neural Network to predict house prices with Keras">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
from keras.layers import Dense</code></pre><p>Then, we specify that in our Keras sequential model like this:</p><pre><code class="language-py">model = Sequential([
Dense(32, activation='relu', input_shape=(10,)),
Dense(32, activation='relu'),
Dense(1, activation='sigmoid'),
])</code></pre><p>And just like that, the code snippet above has defined our architecture! The code above can be interpreted like this:</p><p><code>model = Sequential([ ... ])</code></p><p>This says that we will store our model in the variable ‘model’, and we’ll describe it sequentially (layer by layer) in between the square brackets.</p><p><code>Dense(32, activation='relu', input_shape=(10,)),</code></p><p>We have our first layer as a dense layer with 32 neurons, ReLU activation and the input shape is 10 since we have 10 input features. Note that ‘Dense’ refers to a fully-connected layer, which is what we will be using.</p><p><code>Dense(32, activation='relu'),</code></p><p>Our second layer is also a dense layer with 32 neurons, ReLU activation. Note that we do not have to describe the input shape since Keras can infer from the output of our first layer.</p><p><code>Dense(1, activation='sigmoid'),</code></p><p>Our third layer is a dense layer with 1 neuron, sigmoid activation.</p><p>And just like that, we have written our model architecture (template) in code!</p><h4 id="second-step-filling-in-the-best-numbers"><strong>Second Step: Filling in the best numbers</strong></h4><p>Now that we’ve got our architecture specified, we need to find the best numbers for it. Before we start our training, we have to configure the model by</p><ul><li>Telling it which algorithm you want to use to do the optimization</li><li>Telling it what loss function to use</li><li>Telling it what other metrics you want to track apart from the loss function</li></ul><p>Configuring the model with these settings requires us to call the function model.compile, like this:</p><pre><code class="language-py">model.compile(optimizer='sgd',
loss='binary_crossentropy',
metrics=['accuracy'])</code></pre><p>We put the following settings inside the brackets after model.compile:</p><p><code>optimizer='sgd'</code></p><p>‘sgd’ refers to stochastic gradient descent (over here, it refers to mini-batch gradient descent), which we’ve seen in <a href="https://medium.com/intuitive-deep-learning/intuitive-deep-learning-part-1b-introduction-to-neural-networks-8565d97ddd2d" rel="noopener">Intuitive Deep Learning Part 1b</a>.</p><p><code>loss='binary_crossentropy'</code></p><p>The loss function for outputs that take the values 1 or 0 is called binary cross entropy.</p><p><code>metrics=['accuracy']</code></p><p>Lastly, we want to track accuracy on top of the loss function. Now once we’ve run that cell, we are ready to train!</p><p>Training on the data is pretty straightforward and requires us to write one line of code:</p><pre><code class="language-py">hist = model.fit(X_train, Y_train,
batch_size=32, epochs=100,
plt.plot(hist.history['val_loss'])
plt.title('Model loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['Train', 'Val'], loc='upper right')
plt.plot(hist.history['val_acc'])
plt.title('Model accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.legend(['Train', 'Val'], loc='lower right')
Dense(1000, activation='relu', input_shape=(10,)),
Dense(1000, activation='relu'),
Dense(1000, activation='relu'),
Dense(1000, activation='relu'),
Dense(1, activation='sigmoid'),
])
model_2.compile(optimizer='adam',
loss='binary_crossentropy',
metrics=['accuracy'])
hist_2 = model_2.fit(X_train, Y_train,
batch_size=32, epochs=100,
validation_data=(X_val, Y_val))</code></pre><p>Here, we’ve made a much larger model and we’ve use the Adam optimizer. Adam is one of the most common optimizers we use, which adds some tweaks to stochastic gradient descent such that it reaches the lower loss function faster. If we run this code and plot the loss graphs for hist_2 using the code below (note that the code is the same except that we use ‘hist_2’ instead of ‘hist’):</p><pre><code class="language-py">plt.plot(hist_2.history['loss'])
plt.plot(hist_2.history['val_loss'])
plt.title('Model loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['Train', 'Val'], loc='upper right')
plt.plot(hist_2.history['val_acc'])
plt.title('Model accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.legend(['Train', 'Val'], loc='lower right')
from keras import regularizers</code></pre><p>We then specify our third model like this:</p><pre><code class="language-py">model_3 = Sequential([
Dense(1000, activation='relu', kernel_regularizer=regularizers.l2(0.01), input_shape=(10,)),
Dropout(0.3),
Dense(1000, activation='relu', kernel_regularizer=regularizers.l2(0.01)),
Dropout(0.3),
Dense(1000, activation='relu', kernel_regularizer=regularizers.l2(0.01)),
Dropout(0.3),
Dense(1000, activation='relu', kernel_regularizer=regularizers.l2(0.01)),
Dropout(0.3),
Dense(1, activation='sigmoid', kernel_regularizer=regularizers.l2(0.01)),
])</code></pre><p>Can you spot the differences between Model 3 and Model 2? There are two main differences:</p><p><strong>Difference 1</strong>: To add L2 regularization, notice that we’ve added a bit of extra code in each of our dense layers like this:</p><p><code>kernel_regularizer=regularizers.l2(0.01)</code></p><p>This tells Keras to include the squared values of those parameters in our overall loss function, and weight them by 0.01 in the loss function.</p><p><strong>Difference 2</strong>: To add Dropout, we added a new layer like this:</p><p><code>Dropout(0.3),</code></p><p>This means that the neurons in the previous layer has a probability of 0.3 in dropping out during training. Let’s compile it and run it with the same parameters as our Model 2 (the overfitting one):</p><pre><code class="language-py">model_3.compile(optimizer='adam',
loss='binary_crossentropy',
metrics=['accuracy'])
hist_3 = model_3.fit(X_train, Y_train,
batch_size=32, epochs=100,
validation_data=(X_val, Y_val))</code></pre><p>And now, let’s plot the loss and accuracy graphs. You’ll notice that the loss is a lot higher at the start, and that’s because we’ve changed our loss function. To plot such that the window is zoomed in between 0 and 1.2 for the loss, we add an additional line of code (plt.ylim) when plotting:</p><pre><code class="language-py">plt.plot(hist_3.history['loss'])
plt.plot(hist_3.history['val_loss'])
plt.title('Model loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['Train', 'Val'], loc='upper right')
plt.ylim(top=1.2, bottom=0)
plt.plot(hist_3.history['val_acc'])
plt.title('Model accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.legend(['Train', 'Val'], loc='lower right')
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
