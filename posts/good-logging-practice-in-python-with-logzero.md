---
card: "/images/default.jpg"
tags: [Logging]
description: "Logzero is a Python package created by Chris Hager that simpl"
author: "Milad E. Fahmy"
title: "How to Practice Logging in Python with Logzero"
created: "2021-08-16T15:37:00+02:00"
modified: "2021-08-16T15:37:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-logging tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to Practice Logging in Python with&nbsp;Logzero</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/logezero-image.png 300w,
/news/content/images/size/w600/2020/04/logezero-image.png 600w,
/news/content/images/size/w1000/2020/04/logezero-image.png 1000w,
/news/content/images/size/w2000/2020/04/logezero-image.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/logezero-image.png" alt="How to Practice Logging in Python with&nbsp;Logzero">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Logzero is a Python package created by <a href="https://twitter.com/metachris" rel="noopener">Chris Hager</a> that simplifies logging with Python 2 and 3. Logzero makes it easier as a print statement to show information and debugging details.</p><p>If you are wondering <strong>what logging is</strong>, I recommend that you read the previous article I wrote about <a href="https://medium.com/analytics-vidhya/how-to-run-machine-learning-experiments-with-python-logging-module-9030fbee120e">“How to Run Machine Learning Experiments with Python Logging Module”</a>, especially the first 3 sections. </p><p>In that article, you will learn:</p><ul><li>What is Logging?</li><li>Why logging is important.</li><li>Applications of logging in different technology industries.</li></ul><p>Logzero has different features that make it easier to use in Python projects. Some of these features are:</p><ul><li>Easy logging to console and/or file.</li><li>Provides a fully configured standard Python logger object.</li><li>Pretty formatting, including level-specific <strong>colors</strong> in the console.</li><li>works with all kinds of character encodings and special characters.</li><li>Compatible with Python 2 and 3.</li><li>No further Python dependencies.</li></ul><h2 id="installation">Installation</h2><p>To install logzero with pip run the following:</p><pre><code class="language-python">pip install -U logzero</code></pre><p>You can also install logzero from the public <a href="https://github.com/metachris/logzero" rel="noopener">Github repo</a>:</p><pre><code>git clone https://github.com/metachris/logzero.git
cd logzero
python setup.py install</code></pre><h2 id="basic-example">Basic Example</h2><p>We will start with a basic example. In the python file, we will import the logger from logzero and try 4 different logging level examples.</p><pre><code class="language-python">#import logger from logzero
from logzero import logger
logger.debug("hello")
logger.info("info")
logger.warning("warning")
from logzero import logger, logfile
#set logfile path
logfile('my_logfile.log')
# Log messages
logger.info("This log message saved in the log file")</code></pre><p>The output in the my_logfile.log contains the logging level label (for info level labeled as “I”), date, time, python filename, line number and the message itself.</p><pre><code>[I 200409 23:49:59 demo:8] This log message saved in the log file</code></pre><h2 id="rotating-a-log-file">Rotating a log file</h2><p>You don't need to have a single log file saving all the log entries. This results in a massive log file that is intensive for the system to open and close.</p><p>You can use the <strong>maxBytes</strong> and <strong>backupCount</strong> parameters to allow the file to roll over at a predetermined size. When the size is about to be exceeded, the file is closed and a new file is silently opened for output. Rollover occurs whenever the current log file is nearly maxBytes in length. If either maxBytes or backupCount is zero, rollover never occurs.</p><p>In the example below, we have set the maxBytes to be <strong>1000000 bytes (1 MB).</strong> This means that when the size exceeds 1MB the file is closed and a new file is opened to save log entries. The number of backups to keep is set to 3.</p><pre><code class="language-python"># Set a rotating logfile
from logzero import logger, logfile
import logging
# You can also set a different loglevel for the file handler
logfile("my_logfile.log", loglevel=logging.WARNING)
# Log messages
logger.info("This log message saved in the log file")
logger.warning("This log message saved in the log file")</code></pre><h2 id="set-a-custom-formatter">Set a custom formatter</h2><p>How you want the log record to be formated is up to you. There are different ways you can format your log record. You can include the date, time and logging level in your format so that you know when the log was sent and at what level. </p><p>The example below shows how you can configure the format of the log records.</p><pre><code class="language-python">#import logzero package
import logzero
from logzero import logger, logfile
import logging
#set file path
logfile("my_logfile.log")
# Set a custom formatter
my_formatter = logging.Formatter('%(filename)s - %(asctime)s - %(levelname)s: %(message)s');
logzero.formatter(my_formatter)
# Log messages
logger.info("This log message saved in the log file")
logger.warning("This log message saved in the log file")</code></pre><p>In the example above we have configured the log format by including <em>filename, date, time, logging level name, </em>and<em> message.</em></p><p>This is the output in the my_logfile.log:</p><pre><code>demo.py - 2020–04–10 00:51:44,706 - INFO: This log message saved in the log file
demo.py - 2020–04–10 00:51:44,707 - WARNING: This log message saved in the log file</code></pre><h2 id="custom-logger-instances">Custom Logger Instances</h2><p>Instead of using the default logger, you can also setup specific logger instances with <strong>logzero.setup_logger(..)</strong>. You can configure and returns a fully configured logger instance with different parameters such as <em>name, logfile name, formatter, maxBytes, backupCount, </em>and<em> logging level.</em></p><p>This is a working example of how to setup logging with a custom logger instance:</p><pre><code class="language-python">import logzero package
from logzero import logger, logfile, setup_logger
import logging
# Set a custom formatter
my_formatter = logging.Formatter('%(filename)s - %(asctime)s - %(levelname)s: %(message)s');
#create custom logger instance
custom_logger = setup_logger(
name="My Custom Logger",
logfile="my_logfile.log",
formatter=my_formatter,
maxBytes=1000000,
backupCount=3,level=logging.INFO)
# Log messages
custom_logger.info("This log message saved in the log file")
custom_logger.warning("This log message saved in the log file")</code></pre><p>In the example above we have set a custom logger instance called <strong>custom_logger </strong>with different configured parameter values.</p><h2 id="wrap-up">Wrap up</h2><p>In this article, you've learned the basics, along with some examples, of how to use the Logezero Python package. You can learn more about the features available in the <a href="https://logzero.readthedocs.io/en/latest/#" rel="noopener">documentation</a>. Now you can start implementing the logzero package in your next <a href="https://realpython.com/intermediate-python-project-ideas/" rel="noopener">python project</a>.</p><p>If you learned something new or enjoyed reading this article, please share it so that others can see it. Until then, see you in the next post! I can also be reached on Twitter <a href="https://twitter.com/Davis_McDavid" rel="noopener nofollow noopener">@Davis_McDavid</a></p>
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
