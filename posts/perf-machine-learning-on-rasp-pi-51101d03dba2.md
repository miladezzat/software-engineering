---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca36a740569d1a4ca5b6c.jpg"
tags: [Raspberry Pi]
description: "The revolution of AI is reaching new heights through new medi"
author: "Milad E. Fahmy"
title: "Perf Machine Learning on Rasp Pi"
created: "2021-08-16T11:30:32+02:00"
modified: "2021-08-16T11:30:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-raspberry-pi tag-machine-learning tag-iot tag-technology tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Perf Machine Learning on Rasp Pi</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca36a740569d1a4ca5b6c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca36a740569d1a4ca5b6c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca36a740569d1a4ca5b6c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca36a740569d1a4ca5b6c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca36a740569d1a4ca5b6c.jpg" alt="Perf Machine Learning on Rasp Pi">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
Add <code>disable_camera_led=1</code> to the bottom of the file and rebooting.</p>
<h3 id="besttodisablescreensavermodeassomefollowupcommandsmaytakehours">Best to disable screensaver mode, as some follow-up commands may take hours</h3>
<pre><code>sudo apt-get install xscreensaver
xscreensaver
</code></pre>
<p>Then disable screen saver in the “Display Mode” tab.</p>
<h3 id="nowgettensorflowinstalled">Now get Tensorflow Installed</h3>
<pre><code>sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get update
sudo apt-get install libatlas-base-dev
sudo apt-get install libjasper-dev libqtgui4 python3-pyqt5
pip3 install tensorflow
sudo apt-get install libjpeg-dev zlib1g-dev libxml2-dev libxslt1-dev
pip3 install pillow jupyter matplotlib cython
pip3 install lxml # this one takes a long time
pip3 install python-tk
</code></pre>
<h3 id="opencv">OpenCV</h3>
<pre><code>sudo apt-get install libtiff5-dev libjasper-dev libpng12-dev
Sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
sudo apt-get install libxvidcore-dev libx264-dev
sudo apt-get install qt4-dev-tools
pip3 install opencv-python
</code></pre>
<h3 id="installprotobuff">Install Protobuff</h3>
<pre><code>sudo apt-get install autoconf automake libtool curl
</code></pre>
<p>Then pull down protobuff and untar it.<br>
<a href="https://github.com/protocolbuffers/protobuf/releases">https://github.com/protocolbuffers/protobuf/releases</a></p>
<p>Then cd in and then run the following command which might cause the computer to become unusable for the next 2+ hours.  Use ctrl + alt + F1, to move to terminal only and release all UI RAM.  Close x process with control + c if needed.   You can then run the long-running command.  Base username “pi” and password “raspberry”</p>
<pre><code>make &amp;&amp; make check
</code></pre>
<p>You can then install simply with</p>
<pre><code>sudo make install
cd python
export LD_LIBRARY_PATH=../src/.libs
python3 setup.py build --cpp_implementation
python3 setup.py test --cpp_implementation
sudo python3 setup.py install --cpp_implementation
export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=cpp
export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION_VERSION=3
sudo ldconfig
</code></pre>
<p>Once this is done, you can clean up some install crud with sudo apt-get autoremove, delete the tar.gz download and then finally reboot with sudo reboot now which will return you to a windowed interface</p>
<h3 id="setuptensorflow">Setup Tensorflow</h3>
<pre><code>mkdir tensorflow1 &amp;&amp; cd tesorflow1
git clone --recurse-submodules \ https://github.com/tensorflow/models.git
modify ~/.bashrc to contain new env var named PYTHONPATH as such
export PYTHONPATH=$PYTHONPATH:/home/pi/tensorflow1/models/research:/home/pi/tensorflow1/models/research/slim
</code></pre>
<p>Now go to the zoo:  <a href="https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md">https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md</a><br>
We’ll take the ssdlite_mobilenet, which is the fastest!  Wget the file and then tar -xzvf the tar.gz result and delete the archive once untarred.  Do this in the <code>object_detection</code> folder in your local <code>tensorflow1</code> folder.  Now cd up to the research dir.  Then run:</p>
<pre><code>protoc object_detection/protos/*.proto --python_out=.
</code></pre>
<p>This converted the object detection protos files to python in the proto folder</p>
<h1 id="doneinstalling">Done Installing!!</h1>
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
