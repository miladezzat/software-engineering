---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c99bf740569d1a4ca2186.jpg"
tags: [Neural Networks]
description: "Recurrent neural networks are deep learning models that are t"
author: "Milad E. Fahmy"
title: "The Ultimate Guide to Recurrent Neural Networks in Python"
created: "2021-08-16T15:36:05+02:00"
modified: "2021-08-16T15:36:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-neural-networks tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Guide to Recurrent Neural Networks in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c99bf740569d1a4ca2186.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99bf740569d1a4ca2186.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99bf740569d1a4ca2186.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99bf740569d1a4ca2186.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c99bf740569d1a4ca2186.jpg" alt="The Ultimate Guide to Recurrent Neural Networks in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
</code></pre><h2 id="importing-our-training-set-into-the-python-script"><strong><strong>Importing Our Training Set Into The Python Script</strong></strong></h2><p>The next task that needs to be completed is to import our data set into the Python script.</p><p>We will initially import the data set as a <a href="https://nickmccullum.com/advanced-python/pandas-dataframes/">pandas DataFrame</a> using the <code>read_csv</code> method. However, since the <code>keras</code> module of <code>TensorFlow</code> only accepts <a href="https://nickmccullum.com/advanced-python/numpy-arrays/">NumPy arrays</a> as parameters, the data structure will need to be transformed post-import.</p><p>Let’s start by importing the entire <code>.csv</code> file as a DataFrame:</p><pre><code class="language-py">
training_data = pd.read_csv('FB_training_data.csv')
training_data = training_data.iloc[:, 1].values
</code></pre><p>Note that this command overwrites the existing <code>training_data</code> variable that we had created previously.</p><p>You can now verify that our <code>training_data</code> variable is indeed a NumPy array by running <code>type(training_data)</code>, which should return:</p><pre><code class="language-py">
numpy.ndarray
from sklearn.preprocessing import MinMaxScaler
</code></pre><p>Next we need to create an instance of this class. We will assign the newly-created object to a variable called <code>scaler</code>. We will be using the default parameters for this class, so we do not need to pass anything in:</p><pre><code class="language-py">
scaler = MinMaxScaler()
</code></pre><p>Since we haven’t specified any non-default parameters, this will scale our data set so that every observation is between <code>0</code> and <code>1</code>.</p><p>We have created our <code>scaler</code> object but our <code>training_data</code> data set has not yet been scaled. We need to use the <code>fit_transform</code> method to modify the original data set. Here’s the statement to do this:</p><pre><code class="language-py">
training_data = scaler.fit_transform(training_data.reshape(-1, 1))
</code></pre><h2 id="specifying-the-number-of-timesteps-for-our-recurrent-neural-network"><strong><strong>Specifying The Number Of Timesteps For Our Recurrent Neural Network</strong></strong></h2><p>The next thing we need to do is to specify our number of <code>timesteps</code>. <a href="https://machinelearningmastery.com/use-timesteps-lstm-networks-time-series-forecasting/">Timesteps</a> specify how many previous observations should be considered when the recurrent neural network makes a prediction about the current observation.</p><p>We will use <code>40</code> timesteps in this tutorial. This means that for every day that the neural network predicts, it will consider the previous 40 days of stock prices to determine its output. Note that since there are only ~20 trading days in a given month, using 40 timesteps means we’re relying on stock price data from the previous 2 months.</p><p>So how do we actually specify the number of timesteps within our Python script?</p><p>It’s done through creating two special data structures:</p><ul><li>One data structure that we’ll call <code>x_training_data</code> that contains the last 40 stock price observations in the data set. This is the data that the recurrent neural network will use to make predictions.</li><li>One data structure that we’ll call <code>y_training_data</code> that contains the stock price for the next trading day. This is the data point that the recurrent neural network is trying to predict.</li></ul><p>To start, let’s initialize each of these data structures as an empty Python list:</p><pre><code class="language-py">
x_training_data = []
y_training_data =[]
</code></pre><p>Now we will use a for loop to populate the actual data into each of these Python lists. Here’s the code (with further explanation of the code after the code block):</p><pre><code class="language-py">
for i in range(40, len(training_data)):
x_training_data.append(training_data[i-40:i, 0])
y_training_data.append(training_data[i, 0])
</code></pre><p>Let’s unpack the components of this code block:</p><ul><li>The <code>range(40, len(training_data))</code> function causes the for loop to iterate from <code>40</code> to the last index of the training data.</li><li>The <code>x_training_data.append(training_data[i-40:i, 0])</code> line causes the loop to append the 40 preceding stock prices to <code>x_training_data</code> with each iteration of the loop.</li><li>Similarly, the <code>y_training_data.append(training_data[i, 0])</code> causes the loop to append the next day’s stock price to <code>y_training_data</code> with each iteration of the loop.</li></ul><h2 id="finalizing-our-data-sets-by-transforming-them-into-numpy-arrays"><strong><strong>Finalizing Our Data Sets By Transforming Them Into NumPy Arrays</strong></strong></h2><p>TensorFlow is designed to work primarily with NumPy arrays. Because of this, the last thing we need to do is transform the two Python lists we just created into NumPy arrays.</p><p>Fortunately, this is simple. You simply need to wrap the Python lists in the <code>np.array</code> function. Here’s the code:</p><pre><code class="language-py">
x_training_data = np.array(x_training_data)
y_training_data = np.array(y_training_data)
</code></pre><p>One important way that you can make sure your script is running as intended is to verify the shape of both NumPy arrays.</p><p>The <code>x_training_data</code> array should be a two-directional NumPy array with one dimension being <code>40</code> (the number of timesteps) and the second dimension being <code>len(training_data) - 40</code>, which evaluates to <code>1218</code> in our case.</p><p>Similarly, the <code>y_training_data</code> object should be a one-dimensional NumPy array of length <code>1218</code> (which, again, is <code>len(training_data) - 40</code>).</p><p>You can verify the shape of the arrays by printing their <code>shape</code> attribute, like this:</p><pre><code class="language-py">
print(x_training_data.shape)
print(y_training_data.shape)
</code></pre><p>This prints:</p><pre><code class="language-py">
(1218, 40)
(1218,)
</code></pre><p>Both arrays have the dimensions you’d expect. However, we need to reshape our <code>x_training_data</code> object one more time before proceeding to build our recurrent neural network.</p><p>The reason for this is that the recurrent neural network layer available in TensorFlow only accepts data in a very specific format. You can read the TensorFlow documentation on this topic <a href="https://www.tensorflow.org/api_docs/python/tf/keras/layers/RNN#input_shape">here</a>.</p><p>To reshape the <code>x_training_data</code> object, I will use the <a href="https://nickmccullum.com/numpy-np-reshape/">np.reshape</a> method. Here’s the code to do this:</p><pre><code class="language-py">
x_training_data = np.reshape(x_training_data, (x_training_data.shape[0],
x_training_data.shape[1],
1))
</code></pre><p>Now let’s print the shape of <code>x_training_data</code> once again:</p><pre><code class="language-py">
print(x_training_data.shape)
</code></pre><p>This outputs:</p><pre><code class="language-py">
(1218, 40, 1)
</code></pre><p>Our arrays have the desired shape, so we can proceed to building our recurrent neural network.</p><h2 id="importing-our-tensorflow-libraries"><strong><strong>Importing Our TensorFlow Libraries</strong></strong></h2><p>Before we can begin building our recurrent neural network, we’ll need to import a number of classes from TensorFlow. Here are the statements you should run before proceeding:</p><pre><code class="language-py">
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import LSTM
from tensorflow.keras.layers import Dropout
</code></pre><h2 id="building-our-recurrent-neural-network"><strong><strong>Building Our Recurrent Neural Network</strong></strong></h2><p>It’s now time to build our recurrent neural network.</p><p>The first thing that needs to be done is initializing an object from TensorFlow’s <code>Sequential</code> class. As its name implies, the <code>Sequential</code> class is designed to build neural networks by adding sequences of layers over time.</p><p>Here’s the code to initialize our recurrent neural network:</p><pre><code class="language-py">
rnn = Sequential()
</code></pre><p>As with our <a href="https://nickmccullum.com/python-deep-learning/artificial-neural-network-tutorial/">artificial neural networks</a> and <a href="https://nickmccullum.com/python-deep-learning/convolutional-neural-network-tutorial/">convolutional neural networks</a>, we can add more layers to this recurrent neural network using the <code>add</code> method.</p><h2 id="adding-our-first-lstm-layer"><strong><strong>Adding Our First LSTM Layer</strong></strong></h2><p>The first layer that we will add is an <a href="https://nickmccullum.com/python-deep-learning/lstms-long-short-term-memory-networks/">LSTM</a> layer. To do this, pass an invocation of the <code>LSTM</code> class (that we just imported) into the <code>add</code> method.</p><p>The <code>LSTM</code> class accepts several parameters. More precisely, we will specify three arguments:</p><ul><li>The number of LSTM neurons that you’d like to include in this layer. Increasing the number of neurons is one method for increasing the dimensionality of your recurrent neural network. In our case, we will specify <code>units = 45</code>.</li><li><code>return_sequences = True</code> - this must always be specified if you plan on including another LSTM layer after the one you’re adding. You should specify <code>return_sequences = False</code> for the last LSTM layer in your recurrent neural network.</li><li><code>input_shape</code>: the number of timesteps and the number of predictors in our training data. In our case, we are using <code>40</code> timesteps and only <code>1</code> predictor (stock price), so we will add</li></ul><p>Here is the full <code>add</code> method:</p><pre><code class="language-py">
rnn.add(LSTM(units = 45, return_sequences = True, input_shape = (x_training_data.shape[1], 1)))
</code></pre><p>Note that I used <code>x_training_data.shape[1]</code> instead of the hardcoded value in case we decide to train the recurrent neural network on a larger model at a later date.</p><h2 id="adding-some-dropout-regularization"><strong><strong>Adding Some Dropout Regularization</strong></strong></h2><p><a href="https://machinelearningmastery.com/dropout-for-regularizing-deep-neural-networks/">Dropout regularization</a> is a technique used to avoid overfitting when training neural networks.</p><p>It involves randomly excluding - or “dropping out” - certain layer outputs during the training stage.</p><p>TensorFlow makes it easy to implement dropout regularization using the <code>Dropout</code> class that we imported earlier in our Python script. The <code>Dropout</code> class accepts a single parameter: the dropout rate.</p><p>The dropout rate indicates how many neurons should be dropped in a specific layer of the neural network. It is common to use a dropout rate of 20%. We will follow this convention in our recurrent neural network.</p><p>Here’s how you can instruct TensorFlow to drop 20% of the LSTM layer’s neuron during each iteration of the training stage:</p><pre><code class="language-py">
rnn.add(Dropout(0.2))
</code></pre><h2 id="adding-three-more-lstm-layers-with-dropout-regularization"><strong><strong>Adding Three More LSTM Layers With Dropout Regularization</strong></strong></h2><p>We will now add three more LSTM layers (with dropout regularization) to our recurrent neural network. You will see that after specifying the first LSTM layer, adding more is trivial.</p><p>To add more layers, all that needs to be done is copying the first two <code>add</code> methods with one small change. Namely, we should remove the <code>input_shape</code> argument from the <code>LSTM</code> class.</p><p>We will keep the number of neurons (or <code>units</code>) and the dropout rate the same in each of the <code>LSTM</code> class invocations. Since the third <code>LSTM</code> layer we’re adding in this section will be our last LSTM layer, we can remove the <code>return_sequences = True</code> parameter as mentioned earlier. Removing the parameter sets <code>return_sequences</code> to its default value of <code>False</code>.</p><p>Here’s the full code to add our next three LSTM layers:</p><pre><code class="language-py">
rnn.add(LSTM(units = 45, return_sequences = True))
rnn.add(Dropout(0.2))
rnn.add(LSTM(units = 45, return_sequences = True))
rnn.add(Dropout(0.2))
rnn.add(LSTM(units = 45))
rnn.add(Dropout(0.2))
</code></pre><p>This code is very repetitive and violates the DRY (Don’t repeat yourself) principle of software development. Let’s nest it in a loop instead:</p><pre><code class="language-py">
for i in [True, True, False]:
rnn.add(LSTM(units = 45, return_sequences = i))
rnn.add(Dropout(0.2))
</code></pre><h2 id="adding-the-output-layer-to-our-recurrent-neural-network"><strong><strong>Adding The Output Layer To Our Recurrent Neural Network</strong></strong></h2><p>Let’s finish architecting our recurrent neural network by adding our output layer.</p><p>The output layer will be an instance of the <code>Dense</code> class, which is the same class we used to create <a href="https://nickmccullum.com/python-deep-learning/flattening-full-connection/">the full connection layer</a> of our convolutional neural network earlier in this course.</p><p>The only parameter we need to specify is <code>units </code>, which is the desired number of dimensions that the output layer should generate. Since we want to output the next day’s stock price (a single value), we’ll specify <code>units = 1</code>.</p><p>Here’s the code to create our output layer:</p><pre><code class="language-py">
rnn.add(Dense(units = 1))
</code></pre><h2 id="compiling-our-recurrent-neural-network"><strong><strong>Compiling Our Recurrent Neural Network</strong></strong></h2><p>As you’ll recall from the tutorials on artificial neural networks and convolutional neural networks, the compilation step of building a neural network is where we specify the neural net’s optimizer and loss function.</p><p>TensorFlow allows us to compile a neural network using the aptly-named <code>compile</code> method. It accepts two arguments: <code>optimizer</code> and <code>loss</code>. Let’s start by creating an empty <code>compile</code> function:</p><pre><code class="language-py">
rnn.compile(optimizer = '', loss = '')
</code></pre><p>We now need to specify the <code>optimizer</code> and <code>loss</code> parameters.</p><p>Let’s start by discussing the <code>optimizer</code> parameter. Recurrent neural networks typically use the RMSProp optimizer in their compilation stage. With that said, we will use the Adam optimizer (as before). The Adam optimizer is a workhorse optimizer that is useful in a wide variety of neural network architectures.</p><p>The <code>loss</code> parameter is fairly simple. Since we’re predicting a continuous variable, we can use mean squared error - just like you would when measuring the performance of a <a href="https://nickmccullum.com/python-machine-learning/linear-regression-python/">linear regression machine learning model</a>. This means we can specify <code>loss = mean_squared_error</code>.</p><p>Here’s the final <code>compile</code> method:</p><pre><code class="language-py">
rnn.compile(optimizer = 'adam', loss = 'mean_squared_error')
</code></pre><h2 id="fitting-the-recurrent-neural-network-on-the-training-set"><strong><strong>Fitting The Recurrent Neural Network On The Training Set</strong></strong></h2><p>It’s now time to train our recurrent network on our training data.</p><p>To do this, we use the <code>fit</code> method. The <code>fit</code> method accepts four arguments in this case:</p><ul><li><strong><strong>The training data</strong></strong>: in our case, this will be <code>x_training_data</code> and <code>y_training_data</code></li><li><strong><strong>Epochs</strong></strong>: the number of iterations you’d like the recurrent neural network to be trained on. We will specify <code>epochs = 100</code> in this case.</li><li><strong><strong>The batch size</strong></strong>: the size of batches that the network will be trained in through each epoch.</li></ul><p>Here is the code to train this recurrent neural network according to our specifications:</p><pre><code class="language-py">
rnn.fit(x_training_data, y_training_data, epochs = 100, batch_size = 32)
test_data = pd.read_csv('FB_test_data.csv')
test_data = test_data.iloc[:, 1].values
unscaled_training_data = pd.read_csv('FB_training_data.csv')
unscaled_test_data = pd.read_csv('FB_test_data.csv')
</code></pre><p>Now we can concatenate together the <code>Open</code> column from each DataFrame with the following statement:</p><pre><code class="language-py">
all_data = pd.concat((unscaled_x_training_data['Open'], unscaled_test_data['Open']), axis = 0)
</code></pre><p>This <code>all_data</code> object is a pandas Series of length 1279.</p><p>Now we need to create an array of all the stock prices from January 2020 and the 40 trading days prior to January. We will call this object <code>x_test_data</code> since it contains the <code>x</code> values that we’ll use to make stock price predictions for January 2020.</p><p>The first thing you need to do is find the index of the first trading day in January within our <code>all_data</code> object. The statement <code>len(all_data) - len(test_data)</code> identifies this index for us.</p><p>This represents the upper bound of the first item in the array. To get the lower bound, just subtract <code>40</code> from this number. Said differently, the lower bound is <code>len(all_data) - len(test_data) - 40</code>.</p><p>The upper bound of the entire <code>x_test_data</code> array will be the last item in the data set. Accordingly, we can create this NumPy array with the following statement:</p><pre><code class="language-py">
x_test_data = all_data[len(all_data) - len(test_data) - 40:].values
</code></pre><p>You can check whether or not this object has been created as desired by printing <code>len(x_test_data)</code>, which has a value of <code>61</code>. This makes sense - it should contain the <code>21</code> values for January 2020 as well as the <code>40</code> values prior.</p><p>The last step of this section is to quickly reshape our NumPy array to make it suitable for the <code>predict</code> method:</p><pre><code class="language-py">
x_test_data = np.reshape(x_test_data, (-1, 1))
</code></pre><p>Note that if you neglected to do this step, TensorFlow would print a handy message that would explain exactly how you’d need to transform your data.</p><h3 id="scaling-our-test-data"><strong><strong>Scaling Our Test Data</strong></strong></h3><p>Our recurrent neural network was trained on scaled data. Because of this, we need to scale our <code>x_test_data</code> variable before we can use the model to make predictions.</p><pre><code class="language-py">
x_test_data = scaler.transform(x_test_data)
</code></pre><p>Note that we used the <code>transform</code> method here instead of the <code>fit_transform</code> method (like before). This is because we want to transform the test data according to the fit generated from the entire training data set.</p><p>This means that the transformation that is applied to the test data will be the same as the one applied to the training data - which is necessary for our recurrent neural network to make accurate predictions.</p><h3 id="grouping-our-test-data"><strong><strong>Grouping Our Test Data</strong></strong></h3><p>The last thing we need to do is group our test data into <code>21</code> arrays of size <code>40</code>. Said differently, we’ll now create an array where each entry corresponds to a date in January and contains the stock prices of the <code>40</code> previous trading days.</p><p>The code to do this is similar to something we used earlier:</p><pre><code class="language-py">
final_x_test_data = []
for i in range(40, len(x_test_data)):
final_x_test_data.append(x_test_data[i-40:i, 0])
final_x_test_data = np.array(final_x_test_data)
</code></pre><p>Lastly, we need to reshape the <code>final_x_test_data</code> variable to meet TensorFlow standards.</p><p>We saw this previously, so the code should need no explanation:</p><pre><code class="language-py">
final_x_test_data = np.reshape(final_x_test_data, (final_x_test_data.shape[0],
final_x_test_data.shape[1],
1))
</code></pre><h3 id="actually-making-predictions"><strong><strong>Actually Making Predictions</strong></strong></h3><p>After an absurd amount of data reprocessing, we are now ready to make predictions using our test data!</p><p>This step is simple. Simply pass in our <code>final_x_test_data</code> object into the <code>predict</code> method called on the <code>rnn</code> object. As an example, here is how you could generate these predictions and store them in an aptly-named variable called <code>predictions</code>:</p><pre><code class="language-py">
predictions = rnn.predict(final_x_test_data)
unscaled_predictions = scaler.inverse_transform(predictions)
plt.clf() #This clears the first prediction plot from our canvas
plt.plot(unscaled_predictions)
plt.plot(unscaled_predictions, color = '#135485', label = "Predictions")
plt.plot(test_data, color = 'black', label = "Real Data")
plt.title('Facebook Stock Price Predictions')
</code></pre><h2 id="the-full-code-for-this-tutorial"><strong><strong>The Full Code For This Tutorial</strong></strong></h2><p>You can view the full code for this tutorial in <a href="https://github.com/nicholasmccullum/python-deep-learning">this GitHub repository</a>. It is also pasted below for your reference:</p><pre><code class="language-py">
#Import the necessary data science libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
#Import the data set as a pandas DataFrame
training_data = pd.read_csv('FB_training_data.csv')
#Transform the data set into a NumPy array
training_data = training_data.iloc[:, 1].values
#Apply feature scaling to the data set
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
training_data = scaler.fit_transform(training_data.reshape(-1, 1))
#Initialize our x_training_data and y_training_data variables
#as empty Python lists
x_training_data = []
y_training_data =[]
#Populate the Python lists using 40 timesteps
for i in range(40, len(training_data)):
x_training_data.append(training_data[i-40:i, 0])
y_training_data.append(training_data[i, 0])
#Transforming our lists into NumPy arrays
x_training_data = np.array(x_training_data)
y_training_data = np.array(y_training_data)
#Verifying the shape of the NumPy arrays
print(x_training_data.shape)
print(y_training_data.shape)
#Reshaping the NumPy array to meet TensorFlow standards
x_training_data = np.reshape(x_training_data, (x_training_data.shape[0],
x_training_data.shape[1],
1))
#Printing the new shape of x_training_data
print(x_training_data.shape)
#Importing our TensorFlow libraries
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import LSTM
from tensorflow.keras.layers import Dropout
#Initializing our recurrent neural network
rnn = Sequential()
#Adding our first LSTM layer
rnn.add(LSTM(units = 45, return_sequences = True, input_shape = (x_training_data.shape[1], 1)))
#Perform some dropout regularization
rnn.add(Dropout(0.2))
#Adding three more LSTM layers with dropout regularization
for i in [True, True, False]:
rnn.add(LSTM(units = 45, return_sequences = i))
rnn.add(Dropout(0.2))
#(Original code for the three additional LSTM layers)
# rnn.add(LSTM(units = 45, return_sequences = True))
# rnn.add(Dropout(0.2))
# rnn.add(LSTM(units = 45, return_sequences = True))
# rnn.add(Dropout(0.2))
# rnn.add(LSTM(units = 45))
# rnn.add(Dropout(0.2))
#Adding our output layer
rnn.add(Dense(units = 1))
#Compiling the recurrent neural network
rnn.compile(optimizer = 'adam', loss = 'mean_squared_error')
#Training the recurrent neural network
rnn.fit(x_training_data, y_training_data, epochs = 100, batch_size = 32)
#Import the test data set and transform it into a NumPy array
test_data = pd.read_csv('FB_test_data.csv')
test_data = test_data.iloc[:, 1].values
#Make sure the test data's shape makes sense
print(test_data.shape)
#Plot the test data
plt.plot(test_data)
#Create unscaled training data and test data objects
unscaled_training_data = pd.read_csv('FB_training_data.csv')
unscaled_test_data = pd.read_csv('FB_test_data.csv')
#Concatenate the unscaled data
all_data = pd.concat((unscaled_x_training_data['Open'], unscaled_test_data['Open']), axis = 0)
#Create our x_test_data object, which has each January day + the 40 prior days
x_test_data = all_data[len(all_data) - len(test_data) - 40:].values
x_test_data = np.reshape(x_test_data, (-1, 1))
#Scale the test data
x_test_data = scaler.transform(x_test_data)
#Grouping our test data
final_x_test_data = []
for i in range(40, len(x_test_data)):
final_x_test_data.append(x_test_data[i-40:i, 0])
final_x_test_data = np.array(final_x_test_data)
#Reshaping the NumPy array to meet TensorFlow standards
final_x_test_data = np.reshape(final_x_test_data, (final_x_test_data.shape[0],
final_x_test_data.shape[1],
1))
#Generating our predicted values
predictions = rnn.predict(final_x_test_data)
#Plotting our predicted values
plt.clf() #This clears the old plot from our canvas
plt.plot(predictions)
#Unscaling the predicted values and re-plotting the data
unscaled_predictions = scaler.inverse_transform(predictions)
plt.clf() #This clears the first prediction plot from our canvas
plt.plot(unscaled_predictions)
#Plotting the predicted values against Facebook's actual stock price
plt.plot(unscaled_predictions, color = '#135485', label = "Predictions")
plt.plot(test_data, color = 'black', label = "Real Data")
plt.title('Facebook Stock Price Predictions')
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
