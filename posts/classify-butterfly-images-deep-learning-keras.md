---
card: "/images/default.jpg"
tags: [Deep Learning]
description: "A while ago I read an interesting blog post on the website of"
author: "Milad E. Fahmy"
title: "How to classify butterflies with deep learning in Keras"
created: "2021-08-16T15:38:34+02:00"
modified: "2021-08-16T15:38:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-deep-learning tag-image-classification tag-keras tag-python tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">How to classify butterflies with deep learning in Keras</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/1_K4agkAxY1R6zPzK8s_CqbQ-1.jpeg 300w,
/news/content/images/size/w600/2019/08/1_K4agkAxY1R6zPzK8s_CqbQ-1.jpeg 600w,
/news/content/images/size/w1000/2019/08/1_K4agkAxY1R6zPzK8s_CqbQ-1.jpeg 1000w,
/news/content/images/size/w2000/2019/08/1_K4agkAxY1R6zPzK8s_CqbQ-1.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/1_K4agkAxY1R6zPzK8s_CqbQ-1.jpeg" alt="How to classify butterflies with deep learning in Keras">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A while ago I read an interesting blog post on the website of the Dutch organization <a href="https://www.vlinderstichting.nl/actueel/nieuws/nieuwsbericht/?bericht=1492">Vlinderstichting</a>. Every year they organize a count of butterflies. Volunteers help in determining the different butterfly species in their garden. The Vlinderstichting gathers and analyses the results.</p><p>As the determination of the butterfly species is done by the volunteers, inevitably this process is prone to errors. As a result, the Vlinderstichting has<strong><strong><em><em> </em></em></strong></strong>to manually check &nbsp;the submissions, which is time-consuming.</p><p>Specifically, there are three butterflies for which the Vlinderstichting receives many wrong determinations. These are</p><ul><li><a href="https://en.wikipedia.org/wiki/Meadow_brown">Meadow brown</a> or Maniola jurtina</li><li><a href="https://en.wikipedia.org/wiki/Gatekeeper_(butterfly)">Gatekeeper</a> or Pyronia tithonus</li><li><a href="https://en.wikipedia.org/wiki/Small_heath_(butterfly)">Small heath</a> or Coenonympha pamphilus</li></ul><p>In this article, I will describe the steps to fit a deep learning model that helps to make the distinction between the first two butterflies.</p><h1 id="downloading-images-with-the-flickr-api">Downloading images with the Flickr API</h1><p>To train a convolutional neural network I need to find images of butterflies with the correct label. Surely I could take pictures myself of the butterflies that I want to classify. They sometimes fly around in my garden…</p><p>Just kidding, that would take ages. For this, I need an automated way to get the images. To do that I use the Flickr API via Python.</p><h2 id="setting-up-the-flickr-api">Setting up the Flickr API</h2><p>Firstly, I install the <a href="https://pypi.python.org/pypi/flickrapi/2.3">flickrapi package</a> with pip. Then I create the necessary <a href="https://www.flickr.com/services/api/misc.api_keys.html">API keys on the Flickr website</a> to connect to the Flickr API.</p><p>Besides the flickrapi package, I import the os and urllib packages for downloading the images and setting up the directories.</p><pre><code class="language-python">from flickrapi import FlickrAPI
import urllib
import os
import config</code></pre><p>In the config module, I define the public and secret keys for the Flickr API. So this is simply a Python script (config.py) with the code below:</p><pre><code class="language-python">API_KEY = 'XXXXXXXXXXXXXXXXX'  // replace with your key
API_SECRET = 'XXXXXXXXXXXXXXXXX'  // replace with your secret
IMG_FOLDER = 'XXXXXXXXXXXXXXXXX'  // replace with your folder to store the images</code></pre><p>I keep these keys in a separate file for security reasons. As a result, you can save the code in a public repository like GitHub or BitBucket and putting the config.py in .gitignore. Consequently, you can share your code with others while not having to worry about someone having access to your credentials.</p><p>To extract images of different butterfly species, I wrote a function download_flickr_photos. I will explain this function step by step. In addition, I’ve made the full code available on <a href="https://github.com/bertcarremans/Vlindervinder/tree/master/flickr">GitHub</a>.</p><h2 id="input-parameters">Input parameters</h2><p>First of all, I check if the input parameters are of the correct type or values. If not, I raise an error. The explanation of the parameters can be found in the docstring of the function.</p><pre><code class="language-python">if not (isinstance(keywords, str) or isinstance(keywords, list)):
raise AttributeError('keywords must be a string or a list of strings')
if not (size in ['thumbnail', 'square', 'medium', 'original']):
raise AttributeError('size must be "thumbnail", "square", "medium" or "original"')
if not (max_nb_img == -1 or (max_nb_img &gt; 0 and isinstance(max_nb_img, int))):
raise AttributeError('max_nb_img must be an integer greater than zero or equal to -1')</code></pre><p>Secondly, I define some of the parameters that will be used in the walk method later on. I create a list for the keywords and determine from which URL the images need to be downloaded.</p><pre><code class="language-python">if isinstance(keywords, str):
keywords_list = []
keywords_list.append(keywords)
else:
keywords_list = keywords
if size == 'thumbnail':
size_url = 'url_t'
elif size == 'square':
size_url = 'url_q'
elif size == 'medium':
size_url = 'url_c'
elif size == 'original':
size_url = 'url_o'</code></pre><h2 id="connecting-to-the-flickr-api">Connecting to the Flickr API</h2><p>Next, I connect to the Flickr API. In the FlickrAPI call I use the API keys defined in the config module.</p><pre><code class="language-python">flickr = FlickrAPI(config.API_KEY, config.API_SECRET)</code></pre><h2 id="creating-subfolders-per-butterfly-species">Creating subfolders per butterfly species</h2><p>I save the images of each butterfly species in a separate subfolder. The name of each subfolder is the butterfly species’ name, given by the keyword. If the subfolder does not exist yet, I create it.</p><pre><code class="language-python">results_folder = config.IMG_FOLDER + keyword.replace(" ", "_") + "/"
if not os.path.exists(results_folder):
os.makedirs(results_folder)</code></pre><h2 id="walking-around-in-the-flickr-library">Walking around in the Flickr library</h2><pre><code class="language-python">photos = flickr.walk(
text=keyword,
extras='url_m',
license='1,2,4,5',
per_page=50)</code></pre><p>I use the walk method of the Flickr API to search for images for the specified keyword. This walk method has the same parameters as the <a href="http://www.flickr.com/services/api/flickr.photos.search.html">search method</a> in the Flickr API.</p><p>In the text parameter<strong><strong><em><em>,</em></em></strong></strong><em><em> </em></em>I use the keyword to search for images related to this keyword. Secondly, in the extras parameter<strong><strong><em><em>,</em></em></strong></strong> I specify url_m for a small, medium size of the images. More explanation on the image sizes and their respective URL is given in this <a href="http://librdf.org/flickcurl/api/flickcurl-searching-search-extras.html">Flickcurl C library</a>.</p><p>Thirdly, in the license parameter<strong><strong><em><em>,</em></em></strong></strong> I select images with a non-commercial license. More on the license codes and their meaning can be found on the Flickr <a href="https://www.flickr.com/services/api/flickr.photos.licenses.getInfo.html">API platform</a>. Finally, the per_page parameter specifies how many images I allow per page.</p><p>As a result, I have a generator called photos to download the images.</p><h2 id="downloading-flickr-images">Downloading Flickr images</h2><p>With the photos generator, I can download all the images found for the search query. First I get the specific URL at which I will download the image. Then I increment the count variable and use this counter to create the image filenames.</p><p>With the urlretrieve method, I download the image and save it in the folder for the butterfly species. If an error occurs I print out the error message.</p><pre><code class="language-python">for photo in photos:
try:
url=photo.get('url_m')
print(url)
count += 1
urllib.request.urlretrieve(url,  results_folder + str(count) +".jpg")
except Exception as e:
print(e, 'Download failure')</code></pre><p>To download multiple butterfly species, I create a list and call the function download_flickr_photos in a for loop. For simplicity, I only download two butterfly species of the three mentioned above.</p><pre><code class="language-python">butterflies = ['meadow brown butterfly', 'gatekeeper butterfly']
for butterfly in butterflies:
download_flickr_photos(butterfly)</code></pre><h1 id="data-augmentation-of-images">Data augmentation of images</h1><p>Training a convnet on a small number of images will result in overfitting. Consequently, the model will make errors in classifying new, unseen images. Data augmentation can help to avoid this. Luckily Keras has some nice tools to transform images easily.</p><p>I’d like to compare it with how my son classifies cars on the road. At the moment he’s only 2 years old and hasn’t seen as many cars as an adult. So you could say his training set of images is rather small. Therefore he’s more likely to misclassify cars. For instance, he sometimes takes an ambulance mistakenly for a police van.</p><p>As he will grow older, he will see more ambulances and police vans, with the corresponding label that I will give him. So his training set will become larger and thus he will classify them more correctly.</p><p>For that reason, we need to provide the convnet with more butterfly images than we have at the moment. An easy solution for that is <em>data augmentation</em>. In short, this means applying a set of transformations to the Flickr images.</p><p>Keras provides a <a href="https://keras.io/preprocessing/image/">wide range of image transformations</a>. But first, we’ll have to convert the images so that Keras can work with them.</p><h2 id="converting-an-image-to-numbers">Converting an image to numbers</h2><p>We start by importing the Keras module. We will demonstrate the image transformations with one example image. For that purpose, we use the load_img method.</p><pre><code class="language-python">from keras.preprocessing.image import ImageDataGenerator, array_to_img, img_to_array, load_img
i = load_img('data/train/maniola_jurtina/1.jpg' )
x = img_to_array(i)
x = x.reshape((1,) + x.shape)</code></pre><p>The load_img method creates a Python Image Library file. We’ll need to convert this to a Numpy array to use it in the ImageDataGenerator method later on. That’s done with the handy img_to_array method. As a result, we have an array of shape 75x75x3. These dimensions reflect the width, height and RGB values.</p><p>In fact, each pixel of the image has 3 RGB values. These range between 0 and 255 and represent the intensity of Red, Green and Blue. A lower value stands for higher intensity and a higher value for lower intensity. For instance, one pixel can be represented as a list of these three values [ 78, 136, 60]. Black would represented as [0, 0, 0].</p><p>Finally, we need to add an extra dimension to avoid a ValueError when applying the transformations. This is done with the reshape function.</p><p>Alright, now we have something to work with. Let’s continue with the transformations.</p><h2 id="rotation">Rotation</h2><p>By specifying a value between 0 and 180, Keras will randomly choose an angle to rotate the image. It will do this clockwise or counter-clockwise. In our example, the image will be rotated with maximum of 90 degrees.</p><p>ImageDataGenerator also has a parameter fill_mode. The default value is ‘nearest’. By rotating the image within the width and height of the original image we end up with “empty” pixels. The fill_mode then uses the nearest pixels to fill this empty space.</p><pre><code class="language-python">imgGen = ImageDataGenerator(rotation_range = 90)
i = 1
for batch in imgGen.flow(x, batch_size=1, save_to_dir='example_transformations', save_format='jpeg', save_prefix='trsf'):
i += 1
if i &amp;gt; 3:
rotation_range = 40,
width_shift_range = 0.2,
height_shift_range = 0.2,
rescale = 1./255,
shear_range = 0.2,
zoom_range = 0.2,
horizontal_flip = True)
i = 1
for batch in imgGen.flow(x, batch_size=1, save_to_dir='example_transformations', save_format='jpeg', save_prefix='all'):
i += 1
if i &amp;gt; 3:
rotation_range = 40,
width_shift_range = 0.2,
height_shift_range = 0.2,
rescale = 1./255,
shear_range = 0.2,
zoom_range = 0.2,
horizontal_flip = True)
validation_datagen = ImageDataGenerator(rescale=1./255)
train_generator = train_datagen.flow_from_directory(
'data/train',
batch_size=32,
class_mode='binary')
validation_generator = validation_datagen.flow_from_directory(
'data/validation',
batch_size=32,
class_mode='binary')</code></pre><h2 id="what-about-different-image-sizes">What about different image sizes?</h2><p>The Flickr API lets you download images of specific sizes. However, in real-world applications the image sizes are not always constant. If the aspect ratio of the images is the same, we can simply resize the images. Otherwise, we can crop the images. Unfortunately, it is difficult to crop the image while keeping the object we want to classify intact.</p><p>Keras can deal with different image sizes. When configuring the model you can specify None for the width and height in input_shape.</p><pre><code class="language-python">input_shape=(3, None, None)  # Theano
cnn.add(Dense(64))</code></pre><h2 id="dropout">Dropout</h2><p>Just like pooling, dropout can help to avoid overfitting. It randomly sets a specified fraction of the inputs to zero, during the training of the model. A dropout rate between 20 and 50% is considered to work well.</p><pre><code class="language-python">cnn.add(Dropout(0.2))</code></pre><h2 id="sigmoid-activation">Sigmoid activation</h2><p>Because we want to produce a probability that the image is one of two butterfly species (i.e. binary classification), we can use a sigmoid activation layer.</p><pre><code class="language-python">cnn.add(Activation('relu'))
cnn.add(Dense(1))
cnn.add(Activation( 'sigmoid'))</code></pre><h2 id="applying-the-convolutional-neural-network-on-the-butterfly-images">Applying the convolutional neural network on the butterfly images</h2><p>Now we can define the complete convolutional neural network structure as displayed at the beginning of this post. First, we need to import the necessary Keras modules. Then we can start adding the layers that we explained above.</p><pre><code class="language-python">from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D
from keras.layers import Activation, Flatten, Dense, Dropout
from keras.preprocessing.image import ImageDataGenerator
import time
IMG_SIZE = # Replace with the size of your images
NB_CHANNELS = # 3 for RGB images or 1 for grayscale images
BATCH_SIZE = # Typical values are 8, 16 or 32
NB_TRAIN_IMG = # Replace with the total number training images
NB_VALID_IMG = # Replace with the total number validation images</code></pre><p>I made some additional parameters explicit for the conv layers. Here is a short explanation:</p><ul><li>kernel_size specifies the filter size. So for the first conv layer this is size 2×2</li><li>padding = ‘same’ means applying zero padding as such the original image size is preserved.</li><li>padding = ‘valid’ means we do not apply any padding.</li><li>data_format = ‘channels_last’ is just to specify that the number of color channels is specified last in the input_shape argument.</li></ul><pre><code class="language-python">cnn = Sequential()
cnn.add(Conv2D(filters=32,
kernel_size=(2,2),
strides=(1,1),
padding='same',
input_shape=(IMG_SIZE,IMG_SIZE,NB_CHANNELS),
data_format='channels_last'))
cnn.add(Activation('relu'))
cnn.add(MaxPooling2D(pool_size=(2,2),
strides=2))
cnn.add(Conv2D(filters=64,
kernel_size=(2,2),
strides=(1,1),
padding='valid'))
cnn.add(Activation('relu'))
cnn.add(MaxPooling2D(pool_size=(2,2),
strides=2))
cnn.add(Flatten())
cnn.add(Dense(64))
cnn.add(Activation('relu'))
cnn.add(Dropout(0.25))
cnn.add(Dense(1))
cnn.add(Activation('sigmoid'))
cnn.compile(loss='binary_crossentropy', optimizer='rmsprop', metrics=['accuracy'])</code></pre><p>Finally, we compile this network structure and set the loss parameter to binary_crossentropy which is good for binary targets and use accuracy as the evaluation metric.</p><p>After having specified the network structure, we create the generators for the training and validation samples. On the training samples, we apply data augmentation as explained above. On the validation samples, we do not apply any augmentation as they are just used to evaluate the model performance.</p><pre><code class="language-python">train_datagen = ImageDataGenerator(
rotation_range = 40,
width_shift_range = 0.2,
height_shift_range = 0.2,
rescale = 1./255,
shear_range = 0.2,
zoom_range = 0.2,
horizontal_flip = True)
validation_datagen = ImageDataGenerator(rescale = 1./255)
train_generator = train_datagen.flow_from_directory(
'../flickr/img/train',
target_size=(IMG_SIZE,IMG_SIZE),
class_mode='binary',
batch_size = BATCH_SIZE)
validation_generator = validation_datagen.flow_from_directory(
'../flickr/img/validation',
target_size=(IMG_SIZE,IMG_SIZE),
class_mode='binary',
batch_size = BATCH_SIZE)</code></pre><p>With the flow_from_directory<em><em> </em></em>method on the generators we can easily go through all the images in the specified directories.</p><p>Lastly, we can fit the convolutional neural network on the training data and evaluate with the validation data. The resulting weights of the model can be saved and reused later on.</p><pre><code class="language-python">start = time.time()
cnn.fit_generator(
train_generator,
steps_per_epoch=NB_TRAIN_IMG//BATCH_SIZE,
epochs=50,
validation_data=validation_generator,
validation_steps=NB_VALID_IMG//BATCH_SIZE)
end = time.time()
print('Processing time:',(end - start)/60)
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
