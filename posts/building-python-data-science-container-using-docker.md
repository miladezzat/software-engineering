---
card: "/images/default.jpg"
tags: [Docker]
description: "Artificial Intelligence(AI) and Machine Learning(ML) are lite"
author: "Milad E. Fahmy"
title: "Building Python Data Science Container using Docker"
created: "2021-08-16T15:38:41+02:00"
modified: "2021-08-16T15:38:41+02:00"
---
Bryan Goff on&nbsp;"); background-size: 1px 1px; background-position: 0px calc(1em + 1px);"&gt;UnsplashTL;DRArtificial Intelligence(AI) and Machine Learning(ML) are literally on fire these days. Powering a wide spectrum of use-cases ranging from self-driving cars to drug"&gt;
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-docker tag-data-science tag-python tag-docker-containers ">
<header class="post-full-header">
<h1 class="post-full-title">Building Python Data Science Container using Docker</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/1_oYWC2Wnc4Nf_mH0WL3ep_w.jpeg 300w,
/news/content/images/size/w600/2019/07/1_oYWC2Wnc4Nf_mH0WL3ep_w.jpeg 600w,
/news/content/images/size/w1000/2019/07/1_oYWC2Wnc4Nf_mH0WL3ep_w.jpeg 1000w,
/news/content/images/size/w2000/2019/07/1_oYWC2Wnc4Nf_mH0WL3ep_w.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/1_oYWC2Wnc4Nf_mH0WL3ep_w.jpeg" alt="Building Python Data Science Container using Docker">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
LABEL MAINTAINER="Faizan Bashir &lt;faizan.ibn.bashir@gmail.com&gt;"
# Linking of locale.h as xlocale.h
# This is done to ensure successfull install of python numpy package
# see https://forum.alpinelinux.org/comment/690#comment-690 for more information.
WORKDIR /var/www/
# SOFTWARE PACKAGES
#   * musl: standard C library
#   * lib6-compat: compatibility libraries for glibc
#   * linux-headers: commonly needed, and an unusual package name from Alpine.
#   * build-base: used so we include the basic development packages (gcc)
#   * bash: so we can access /bin/bash
#   * git: to ease up clones of repos
#   * ca-certificates: for SSL verification during Pip and easy_install
#   * freetype: library used to render text onto bitmaps, and provides support font-related operations
#   * libgfortran: contains a Fortran shared library, needed to run Fortran
#   * libgcc: contains shared code that would be inefficient to duplicate every time as well as auxiliary helper routines and runtime support
#   * libstdc++: The GNU Standard C++ Library. This package contains an additional runtime library for C++ programs built with the GNU compiler
#   * openblas: open source implementation of the BLAS(Basic Linear Algebra Subprograms) API with many hand-crafted optimizations for specific processor types
#   * tcl: scripting language
#   * tk: GUI toolkit for the Tcl scripting language
#   * libssl1.0: SSL shared libraries
ENV PACKAGES="\
dumb-init \
musl \
libc6-compat \
linux-headers \
build-base \
bash \
git \
ca-certificates \
freetype \
libgfortran \
libgcc \
libstdc++ \
openblas \
tcl \
tk \
libssl1.0 \
"
# PYTHON DATA SCIENCE PACKAGES
#   * numpy: support for large, multi-dimensional arrays and matrices
#   * matplotlib: plotting library for Python and its numerical mathematics extension NumPy.
#   * scipy: library used for scientific computing and technical computing
#   * scikit-learn: machine learning library integrates with NumPy and SciPy
#   * pandas: library providing high-performance, easy-to-use data structures and data analysis tools
#   * nltk: suite of libraries and programs for symbolic and statistical natural language processing for English
ENV PYTHON_PACKAGES="\
numpy \
matplotlib \
scipy \
scikit-learn \
pandas \
nltk \
"
RUN apk add --no-cache --virtual build-dependencies python --update py-pip \
&amp;&amp; apk add --virtual build-runtime \
build-base python-dev openblas-dev freetype-dev pkgconfig gfortran \
&amp;&amp; ln -s /usr/include/locale.h /usr/include/xlocale.h \
&amp;&amp; pip install --upgrade pip \
&amp;&amp; pip install --no-cache-dir $PYTHON_PACKAGES \
&amp;&amp; apk del build-runtime \
&amp;&amp; apk add --no-cache --virtual build-dependencies $PACKAGES \
&amp;&amp; rm -rf /var/cache/apk/*
LABEL MAINTAINER="Faizan Bashir &lt;faizan.ibn.bashir@gmail.com&gt;"
# Linking of locale.h as xlocale.h
# This is done to ensure successfull install of python numpy package
# see https://forum.alpinelinux.org/comment/690#comment-690 for more information.
WORKDIR /var/www/
# SOFTWARE PACKAGES
#   * musl: standard C library
#   * lib6-compat: compatibility libraries for glibc
#   * linux-headers: commonly needed, and an unusual package name from Alpine.
#   * build-base: used so we include the basic development packages (gcc)
#   * bash: so we can access /bin/bash
#   * git: to ease up clones of repos
#   * ca-certificates: for SSL verification during Pip and easy_install
#   * freetype: library used to render text onto bitmaps, and provides support font-related operations
#   * libgfortran: contains a Fortran shared library, needed to run Fortran
#   * libgcc: contains shared code that would be inefficient to duplicate every time as well as auxiliary helper routines and runtime support
#   * libstdc++: The GNU Standard C++ Library. This package contains an additional runtime library for C++ programs built with the GNU compiler
#   * openblas: open source implementation of the BLAS(Basic Linear Algebra Subprograms) API with many hand-crafted optimizations for specific processor types
#   * tcl: scripting language
#   * tk: GUI toolkit for the Tcl scripting language
#   * libssl1.0: SSL shared libraries
ENV PACKAGES="\
dumb-init \
musl \
libc6-compat \
linux-headers \
build-base \
bash \
git \
ca-certificates \
freetype \
libgfortran \
libgcc \
libstdc++ \
openblas \
tcl \
tk \
libssl1.0 \
"
# PYTHON DATA SCIENCE PACKAGES
#   * numpy: support for large, multi-dimensional arrays and matrices
#   * matplotlib: plotting library for Python and its numerical mathematics extension NumPy.
#   * scipy: library used for scientific computing and technical computing
#   * scikit-learn: machine learning library integrates with NumPy and SciPy
#   * pandas: library providing high-performance, easy-to-use data structures and data analysis tools
#   * nltk: suite of libraries and programs for symbolic and statistical natural language processing for English
ENV PYTHON_PACKAGES="\
numpy \
matplotlib \
scipy \
scikit-learn \
pandas \
nltk \
"
RUN apk add --no-cache --virtual build-dependencies python3 \
&amp;&amp; apk add --virtual build-runtime \
build-base python3-dev openblas-dev freetype-dev pkgconfig gfortran \
&amp;&amp; ln -s /usr/include/locale.h /usr/include/xlocale.h \
&amp;&amp; python3 -m ensurepip \
&amp;&amp; rm -r /usr/lib/python*/ensurepip \
&amp;&amp; pip3 install --upgrade pip setuptools \
&amp;&amp; ln -sf /usr/bin/python3 /usr/bin/python \
&amp;&amp; ln -sf pip3 /usr/bin/pip \
&amp;&amp; rm -r /root/.cache \
&amp;&amp; pip install --no-cache-dir $PYTHON_PACKAGES \
&amp;&amp; apk del build-runtime \
&amp;&amp; apk add --no-cache --virtual build-dependencies $PACKAGES \
&amp;&amp; rm -rf /var/cache/apk/*
CMD ["python3"]</code></pre><figcaption><a href="https://gist.github.com/faizanbashir/9443a7149cc53f81d84d0d356f871ec7#file-datascience-python3-6-dockerfile">datascience-python3.6.Dockerfile</a></figcaption></figure><p>Run the container like so:</p><pre><code>$ docker container run --rm -it faizanbashir/python-datascience:3.6 python</code></pre><p>With this, you have a ready to use container for doing all kinds of cool data science stuff.</p><hr><h3 id="serving-puddin-">Serving Puddin’</h3><p>Figures, you have the time and resources to set up all this stuff. In case you don’t, you can pull the existing images that I have already built and pushed to Docker’s registry <a href="https://hub.docker.com/" rel="nofollow noopener noopener">Docker Hub</a> using:</p><pre><code># For Python 2.7 pull$ docker pull faizanbashir/python-datascience:2.7</code></pre><pre><code># For Python 3.6 pull$ docker pull faizanbashir/python-datascience:3.6</code></pre><p>After pulling the images you can use the image or extend the same in your Dockerfile file or use it as an image in your docker-compose or stack file.</p><hr><h3 id="aftermath">Aftermath</h3><p>The world of AI, ML is getting pretty exciting these days and will continue to become even more exciting. Big players are investing heavily in these domains. About time you start to harness the power of data, who knows it might lead to something wonderful.</p><p>You can check out the code here.</p><p><a href="https://github.com/faizanbashir/python-datascience" rel="nofollow"><strong>faizanbashir/python-datascience</strong></a><br><a href="https://github.com/faizanbashir/python-datascience" rel="nofollow"><em>Docker image for python datascience container with NumPy, SciPy, Scikit-learn, Matplotlib, nltk, pandas packages…</em>github.com</a></p><p>I hope this article helped in building containers for your data science projects. Clap if it increased your knowledge, help it reach more people.</p>
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
