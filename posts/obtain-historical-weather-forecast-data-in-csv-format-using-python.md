---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca193740569d1a4ca4f62.jpg"
tags: [Python]
description: "Recently, I worked on a machine learning project related to r"
author: "Milad E. Fahmy"
title: "Obtain Historical Weather Forecast data in CSV format using Python"
created: "2021-08-16T15:38:38+02:00"
modified: "2021-08-16T15:38:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-weather tag-api tag-dataframe tag-csv tag-machine-learning tag-worldweatheronline ">
<header class="post-full-header">
<h1 class="post-full-title">Obtain Historical Weather Forecast data in CSV format using Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca193740569d1a4ca4f62.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca193740569d1a4ca4f62.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca193740569d1a4ca4f62.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca193740569d1a4ca4f62.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca193740569d1a4ca4f62.jpg" alt="Obtain Historical Weather Forecast data in CSV format using Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
from wwo_hist import retrieve_hist_data
# set working directory to store output csv file(s)
import os
os.chdir(".\YOUR_PATH")</code></pre><p><strong>Example code:</strong></p><p>Specify input parameters and call <strong><strong><em>retrieve_hist_data()</em></strong></strong><em>.</em> Please visit <a href="https://github.com/ekapope/WorldWeatherOnline" rel="noopener">my github repo</a> for more info about parameters setup.</p><p>This will retrieve <strong><strong>3-hour interval</strong></strong> historical weather forecast data for <strong><strong>Singapore</strong></strong> and <strong><strong>California</strong></strong> from <strong><strong>11-Dec-2018</strong></strong> to <strong><strong>11-Mar-2019</strong></strong>, save output into hist_weather_data variable and <strong><strong>CSV</strong></strong> files.frequency = 3</p><pre><code class="language-py">FREQUENCY = 3
START_DATE = '11-DEC-2018'
END_DATE = '11-MAR-2019'
API_KEY = 'YOUR_API_KEY'
LOCATION_LIST = ['singapore','california']
hist_weather_data = retrieve_hist_data(API_KEY,
LOCATION_LIST,
START_DATE,
END_DATE,
FREQUENCY,
location_label = False,
export_csv = True,
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
