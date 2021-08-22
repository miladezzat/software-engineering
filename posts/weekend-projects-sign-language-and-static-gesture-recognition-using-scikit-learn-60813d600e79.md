---
card: "https://cdn-media-1.freecodecamp.org/images/1*KAm4Ld62yKhVUka-r8s7zA.png"
tags: [Programming]
description: "by Sreehari"
author: "Milad E. Fahmy"
title: "Weekend project: sign language and static-gesture recognition using scikit-learn"
created: "2021-08-16T15:42:59+02:00"
modified: "2021-08-16T15:42:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-machine-learning tag-python tag-artificial-intelligence tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Weekend project: sign language and static-gesture recognition using scikit-learn</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KAm4Ld62yKhVUka-r8s7zA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*KAm4Ld62yKhVUka-r8s7zA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*KAm4Ld62yKhVUka-r8s7zA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KAm4Ld62yKhVUka-r8s7zA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KAm4Ld62yKhVUka-r8s7zA.png" alt="Weekend project: sign language and static-gesture recognition using scikit-learn">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
|----user_1
|---A0.jpg
|---A1.jpg
|---A2.jpg
|---...
|---Y9.jpg
|----user_2
|---A0.jpg
|---A1.jpg
|---A2.jpg
|---...
|---Y9.jpg
|---- ...
def convertToGrayToHOG(imgVector):
rgbImage = rgb2gray(imgVector)
return hog(rgbImage)
# returns cropped image
def crop(img, x1, x2, y1, y2, scale):
crp=img[y1:y2,x1:x2]
crp=resize(crp,((scale, scale)))
return crp
#loads data for multiclass classification
def get_data(user_list, img_dict, data_directory):
X = []
Y = []
for user in user_list:
user_images = glob.glob(data_directory+user+'/*.jpg')
boundingbox_df = pd.read_csv(data_directory + user + '/'
+ user + '_loc.csv')
for rows in boundingbox_df.iterrows():
cropped_img = crop( img_dict[rows[1]['image']],
rows[1]['top_left_x'],
rows[1]['bottom_right_x'],
rows[1]['top_left_y'],
rows[1]['bottom_right_y'],
128
)
hogvector = convertToGrayToHOG(cropped_img)
X.append(hogvector.tolist())
Y.append(rows[1]['image'].split('/')[1][0])
return X, Y</code></pre><p>The next step is to encode the output labels (the Y-values) to numerical values. We do this using sklearn’s label encoder.</p><p>In our code, we have done this as follows:</p><pre><code class="language-py">Y_mul = self.label_encoder.fit_transform(Y_mul)</code></pre><p>where, the label_encoder object is constructed as follows within the gesture-recognizer class constructor:</p><pre><code class="language-py">self.label_encoder = LabelEncoder().fit(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'])</code></pre><p>Once this is done, the model can be trained using any Multi-class classification algorithm of your choice from the scikit learn toolbox. We have trained ours using <a href="http://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html" rel="noopener">Support Vector Classification</a>, with a linear kernel.</p><p>Training a model using sklearn does not involve more than two lines of code. Here’s how you do it:</p><pre><code class="language-py">svcmodel = SVC(kernel='linear', C=0.9, probability=True)
self.signDetector = svcmodel.fit(X_mul, Y_mul) </code></pre><p>The hyperparameters (i.e., C=0.9 in this case) can be tuned using a Grid Search. Read more about this <a href="http://scikit-learn.org/stable/modules/grid_search.html" rel="noopener">here</a>.</p><p>In this case, we do not know a whole lot about the data as such (i.e., the hog vectors). So, it’d be a good idea to try and use algorithms like xgboost (Extreme Gradient Boosting) or Random Forest Classifiers and see how these algorithms perform.</p><h4 id="part-2-building-the-localizer">Part 2: Building the Localizer</h4><p>This part requires a slightly more effort as compared to the first.</p><p>Broadly, we’ll employ the following steps in completing this task.</p><ol><li><strong>Build a data set</strong> comprising images of hands and parts that are not-hand, using the given data set and the bounding box values for each image.</li><li><strong>Train a binary classifier</strong> to detect hand/not-hand images using the above data set.</li><li>(Optional) Use <strong>Hard Negative Mining</strong> to improve the classifier.</li><li>Use a <a href="http://www.pyimagesearch.com/2015/03/23/sliding-windows-for-object-detection-with-python-and-opencv/" rel="noopener"><strong>sliding window approach</strong></a><strong> with various scales</strong>, on the query image to isolate the region of interest.</li></ol><p><em>Here, we are not going to be using any image processing techniques like filtering, color segmentation, etc. The scikit image library is used to read, crop, scale, convert images to gray scale and extract hog vectors.</em></p><h4 id="building-the-hand-not-hand-dataset-">Building the hand/not hand dataset:</h4><p>The data set could be built using any strategy you like. One way to do this, is to generate random coordinates and then check the ratio of area of intersection to area of union (i.e., the degree of overlap with the given bounding box) to determine if it is a non-hand section. (Another approach could be to use a sliding window to determine the coordinates. But this is horribly slow and unnecessary)</p><pre><code class="language-py">"""
This function randomly generates bounding boxes
Returns hog vector of those cropped bounding boxes along with label
Label : 1 if hand ,0 otherwise
"""
def buildhandnothand_lis(frame,imgset):
poslis =[]
neglis =[]
for nameimg in frame.image:
tupl = frame[frame['image']==nameimg].values[0]
x_tl = tupl[1]
y_tl = tupl[2]
side = tupl[5]
conf = 0
dic = [0, 0]
arg1 = [x_tl,y_tl,conf,side,side]
poslis.append( convertToGrayToHOG(crop(imgset[nameimg],  x_tl,x_tl+side,y_tl,y_tl+side)))
while dic[0] &lt;= 1 or dic[1] &lt; 1:
x = random.randint(0,320-side)
y = random.randint(0,240-side)
crp = crop(imgset[nameimg],x,x+side,y,y+side)
hogv = convertToGrayToHOG(crp)
arg2 = [x,y, conf, side, side]
z = overlapping_area(arg1,arg2)
if dic[0] &lt;= 1 and z &lt;= 0.5:
neglis.append(hogv)
dic[0] += 1
if dic[0]== 1:
break
label_1 = [1 for i in range(0,len(poslis)) ]
label_0 = [0 for i in range(0,len(neglis))]
label_1.extend(label_0)
poslis.extend(neglis)
return poslis,label_1</code></pre><h4 id="training-a-binary-classifier-">Training a binary classifier:</h4><p>Once the data set is ready, training the classifier can be done exactly as seen before in part 1.</p><p>Usually, in this case, a technique called <a href="https://www.reddit.com/r/computervision/comments/2ggc5l/what_is_hard_negative_mining_and_how_is_it/" rel="noopener">Hard Negative Mining</a> is employed to reduce the number of false positive detections and improve the classifier. One or two iterations of hard negative mining using a Random Forest Classifier, is enough to ensure that your classifier reaches acceptable classification accuracies, which in this case is anything above 80%.</p><p>Take a look at the <a href="https://github.com/mon95/Sign-Language-and-Static-gesture-recognition-using-sklearn/blob/master/dataset/gesture_recognizer1.py#L221" rel="noopener">code here for a sample implementation of the same</a>.</p><h4 id="detecting-hands-in-test-images-">Detecting hands in test images:</h4><p>Now, to actually use the above classifier, we scale the test image by various factors and then use a <a href="http://www.pyimagesearch.com/2015/03/23/sliding-windows-for-object-detection-with-python-and-opencv/" rel="noopener">sliding window approach</a> on all of them to pick the window which captures the region of interest perfectly. This is done by selecting the region corresponding to the max of the confidence scores allotted by the binary (hand/not-hand) classifier across all scales.</p><p>The test images need to be scaled because, we run a set sized window (in our case, it is 128x128) across all images to pick the region of interest and it is possible that the region of interest does not fit perfectly into this window size.</p><p><a href="https://github.com/mon95/Sign-Language-and-Static-gesture-recognition-using-sklearn/blob/master/dataset/gesture_recognizer1.py#L312" rel="noopener">Sample implementation</a> and <a href="https://github.com/mon95/Sign-Language-and-Static-gesture-recognition-using-sklearn/blob/master/dataset/gesture_recognizer1.py#L416" rel="noopener">overall detection across all scales</a>.</p><h4 id="putting-it-all-together">Putting it all together</h4><p>After both parts are complete, all that’s left to do is to call them in succession to get the final output when provided with a test image.</p><p>That is, given a test image, we first get the various detected regions across different scales of the image and pick the best one among them. This region is then cropped out, rescaled (to 128x128) and its corresponding hog vector is fed to the multi-class classifier (i.e., the gesture recognizer). The gesture recognizer then predicts the gesture denoted by the hand in the image.</p><h4 id="key-points">Key points</h4><p>To summarize, this project involves the following steps. The links refer to the relevant code in the github repository.</p><ol><li><a href="https://github.com/mon95/Sign-Language-and-Static-gesture-recognition-using-sklearn/blob/master/dataset/gesture_recognizer1.py#L71" rel="noopener">Building the hand/not-hand dataset</a>.</li><li><a href="https://github.com/mon95/Sign-Language-and-Static-gesture-recognition-using-sklearn/blob/master/dataset/gesture_recognizer1.py#L43" rel="noopener">Converting all the images i.e., cropped sections with the gestures and the hand, not-hand images, to its vectorized form.</a></li><li><a href="https://github.com/mon95/Sign-Language-and-Static-gesture-recognition-using-sklearn/blob/master/dataset/gesture_recognizer1.py#L360" rel="noopener">Building a binary classifier for detecting the section with the hand and building a multi-class classifier for identifying the gesture using these data sets.</a></li><li><a href="https://github.com/mon95/Sign-Language-and-Static-gesture-recognition-using-sklearn/blob/master/dataset/gesture_recognizer1.py#L403" rel="noopener">Using the above classifiers one after the other to perform the required task.</a></li></ol><p><a href="https://www.facebook.com/sukriti10.tiwari">Suks</a> and I worked on this project as part of the Machine Learning course that we took up in college. A big shout out to her for all her contributions!</p><p>Also, we wanted to mention <a href="https://www.pyimagesearch.com" rel="noopener">Pyimagesearch</a>, which is a wonderful blog that we used extensively while we were working on the project! Do check it out for content on image processing and opencv related content.</p><p>Cheers!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
