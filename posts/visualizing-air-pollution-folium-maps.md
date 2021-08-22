---
card: "/images/default.jpg"
tags: [Data Visualization]
description: "In my previous story on forecasting air pollution, I looked i"
author: "Milad E. Fahmy"
title: "How to Visualize Air Pollution using Folium Maps - An In Depth Tutorial"
created: "2021-08-15T23:32:29+02:00"
modified: "2021-08-15T23:32:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-visualization tag-folium tag-time-series tag-data-science tag-geojson ">
<header class="post-full-header">
<h1 class="post-full-title">How to Visualize Air Pollution using Folium Maps - An In Depth Tutorial</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/0_PlMoYJ9MPTjB_2Ju.jpeg 300w,
/news/content/images/size/w600/2020/01/0_PlMoYJ9MPTjB_2Ju.jpeg 600w,
/news/content/images/size/w1000/2020/01/0_PlMoYJ9MPTjB_2Ju.jpeg 1000w,
/news/content/images/size/w2000/2020/01/0_PlMoYJ9MPTjB_2Ju.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/0_PlMoYJ9MPTjB_2Ju.jpeg" alt="How to Visualize Air Pollution using Folium Maps - An In Depth Tutorial">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In my previous story on <a href="/news/forecasting-air-pollution-recurrent-neural-networks/">forecasting air pollution</a>, I looked into using recurrent neural networks (RNN and LSTM) to forecast air pollution in Belgium. As a small side project, I thought it would be interesting to <strong><strong>plot the air pollution over time on a map</strong></strong>. The <a href="http://python-visualization.github.io/folium/" rel="noopener nofollow">Folium package</a> is a great tool for doing that.</p><p>We will plot the quantities of 6 air pollutants in Belgium:</p><ul><li><strong><strong>Ozone (O3)</strong></strong></li><li><strong><strong>Nitrogen Dioxide (NO2)</strong></strong></li><li><strong><strong>Carbon Monoxide (CO)</strong></strong></li><li><strong><strong>Sulphur Dioxide (SO2)</strong></strong></li><li><strong><strong>Particulate Matter (PM10)</strong></strong></li><li><strong><strong>Benzene (C6H6)</strong></strong></li></ul><p>The data is downloaded from the website of the <a href="https://www.eea.europa.eu/data-and-maps/data/aqereporting-2/be" rel="noopener nofollow">European Environment Agency (EEA)</a>. If you want to use data from other European countries, I encourage you to visit their website. It has datasets for many EU countries and is very well documented.</p><p>The datasets we will use are:</p><ul><li>BE_<em><em>&lt;pollutant_ID&gt;</em></em>_2013–2015_aggregated_timeseries.csv</li><li>BE_2013–2015_metadata.csv</li></ul><p>The pollutant IDs are described in the <a href="http://dd.eionet.europa.eu/vocabulary/aq/pollutant" rel="noopener nofollow">EEA’s vocabulary of air pollutants</a>.</p><ul><li>1 = Sulphur Dioxide</li><li>5 = Particulate Matter</li><li>7 = Ozone</li><li>8 = Nitrogen Dioxide</li><li>10 = Carbon Monoxide</li><li>20 = Benzene</li></ul><h1 id="project-set-up">Project set-up</h1><h2 id="importing-packages">Importing packages</h2><pre><code class="language-python">from pathlib import Path
import pandas as pd
import numpy as np
import seaborn as sns
import folium
from folium.plugins import TimestampedGeoJson
project_dir = Path('/Users/bertcarremans/Data Science/Projecten/air_pollution_forecasting')</code></pre><h2 id="air-pollutants">Air pollutants</h2><p>We’ll make a dictionary of the air pollutants and their dataset number, scientific notation, name, and bin edges. The bin edges are based on the scale on this <a href="https://nl.wikipedia.org/wiki/Luchtvervuiling" rel="noopener nofollow">Wikipedia page</a>.</p><pre><code class="language-python">pollutants = {
1: {
'notation' : 'SO2',
'name' :'Sulphur dioxide',
'bin_edges' : np.array([15,30,45,60,80,100,125,165,250])
},
5: {
'notation' : 'PM10',
'name' :'Particulate matter &lt; 10 µm',
'bin_edges' : np.array([10,20,30,40,50,70,100,150,200])
},
7: {'notation' : 'O3',
'name' :'Ozone',
'bin_edges' : np.array([30,50,70,90,110,145,180,240,360])
},
8: {'notation' : 'NO2',
'name' :'Nitrogen dioxide',
'bin_edges' : np.array([25,45,60,80,110,150,200,270,400])
},
10: {'notation' : 'CO',
'name' :'Carbon monoxide',
'bin_edges' : np.array([1.4,2.1,2.8,3.6,4.5,5.2,6.6,8.4,13.7])
},
20: {'notation' : 'C6H6',
'name' :'Benzene',
'bin_edges' : np.array([0.5,1.0,1.25,1.5,2.75,3.5,5.0,7.5,10.0])
}
}</code></pre><h2 id="loading-the-metadata">Loading the metadata</h2><p>In the metadata, we have the <strong><strong>coordinates</strong></strong> for every SamplingPoint. We’ll need that information to plot the SamplingPoints on the map.</p><pre><code class="language-python">meta = pd.read_csv(project_dir / 'data/raw/BE_2013-2015_metadata.csv', sep='\t')</code></pre><h2 id="color-scale">Color scale</h2><p>There are 10 bin edges for which we will use a different color. These colors were created with <a href="http://colorbrewer2.org/#type=diverging&amp;scheme=RdBu&amp;n=10" rel="noopener nofollow">ColorBrewer</a>.</p><pre><code class="language-python">color_scale = np.array(['#053061','#2166ac','#4393c3','#92c5de','#d1e5f0','#fddbc7','#f4a582','#d6604d','#b2182b','#67001f'])
print('&gt; Loading data...')
date_vars = ['DatetimeBegin','DatetimeEnd']
filename = 'data/raw/BE_' + str(pollutant_ID) + '_2013-2015_aggregated_timeseries.csv'
agg_ts = pd.read_csv(project_dir / filename, sep='\t', parse_dates=date_vars, date_parser=pd.to_datetime)
return agg_ts</code></pre><h2 id="data-cleaning">Data cleaning</h2><p>We’ll do some basic cleaning of the data:</p><ul><li>Keep only records with DataAggregationProcss of P1D to have daily data</li><li>Remove records with UnitOfAirPollutionLevel of count</li><li>Remove variables redundant for the visualization</li><li>Remove SamplingPoints which have less than 1000 measurement days</li><li>Insert missing dates and imputing the AirpollutionLevel with the value of the next valid date</li></ul><pre><code class="language-python">def clean_data(df):
print('&gt; Cleaning data...')
df = df.loc[df.DataAggregationProcess=='P1D', :]
df = df.loc[df.UnitOfAirPollutionLevel!='count', :]
ser_avail_days = df.groupby('SamplingPoint').nunique()['DatetimeBegin']
df = df.loc[df.SamplingPoint.isin(ser_avail_days[ser_avail_days.values &gt;= 1000].index), :]
vars_to_drop = ['AirPollutant','AirPollutantCode','Countrycode','Namespace','TimeCoverage','Validity','Verification','AirQualityStation',
'AirQualityStationEoICode','DataAggregationProcess','UnitOfAirPollutionLevel', 'DatetimeEnd', 'AirQualityNetwork',
'DataCapture', 'DataCoverage']
df.drop(columns=vars_to_drop, axis='columns', inplace=True)
dates = list(pd.period_range(min(df.DatetimeBegin), max(df.DatetimeBegin), freq='D').values)
samplingpoints = list(df.SamplingPoint.unique())
new_idx = []
for sp in samplingpoints:
for d in dates:
new_idx.append((sp, np.datetime64(d)))
df.set_index(keys=['SamplingPoint', 'DatetimeBegin'], inplace=True)
df.sort_index(inplace=True)
df = df.reindex(new_idx)
df['AirPollutionLevel'] = df.groupby(level=0).AirPollutionLevel.bfill().fillna(0)
return df</code></pre><h2 id="plotting-air-pollution-over-time">Plotting air pollution over time</h2><p>Loading all of the dates for all sampling points would be too heavy for the map. Therefore, we will <strong><strong>resample</strong></strong> the data by taking the last day of each month.</p><p><strong>Note</strong>: The bin edges that we use in this notebook should normally be applied on (semi-)hourly averages for O3, NO2 and CO. In the datasets we are using in this notebook, we have only daily averages. As this notebook is only to illustrate how to plot time series data on a map, we will continue with the daily averages. On the EEA website, you can, however, download hourly averages as well.</p><pre><code class="language-python">def color_coding(poll, bin_edges):
idx = np.digitize(poll, bin_edges, right=True)
return color_scale[idx]
def prepare_data(df, pollutant_ID):
print('&gt; Preparing data...')
df = df.reset_index().merge(meta, how='inner', on='SamplingPoint').set_index('DatetimeBegin')
df = df.loc[:, ['SamplingPoint','Latitude', 'Longitude', 'AirPollutionLevel']]
df = df.groupby('SamplingPoint', group_keys=False).resample(rule='M').last().reset_index()
df['color'] = df.AirPollutionLevel.apply(color_coding, bin_edges=pollutants[pollutant_ID]['bin_edges'])
return df</code></pre><p>To show the pollution evolving over time, we will use the <strong><strong>TimestampedGeoJson</strong> </strong><a href="https://python-visualization.github.io/folium/plugins.html">Folium plugin</a>. This plugin requires GeoJSON input features. In order to convert the data of the dataframe, I created a small function <strong><strong>create_geojson_features</strong></strong> that does that.</p><pre><code class="language-python">def create_geojson_features(df):
print('&gt; Creating GeoJSON features...')
features = []
for _, row in df.iterrows():
feature = {
'type': 'Feature',
'geometry': {
'type':'Point',
'coordinates':[row['Longitude'],row['Latitude']]
},
'properties': {
'time': row['DatetimeBegin'].date().__str__(),
'style': {'color' : row['color']},
'icon': 'circle',
'iconstyle':{
'fillColor': row['color'],
'fillOpacity': 0.8,
'stroke': 'true',
'radius': 7
}
}
}
features.append(feature)
return features</code></pre><p>After that, the input features are created and we can create a map to add them to. The TimestampedGeoJson plugin provides some neat options for the time slider, which are self-explanatory.</p><pre><code class="language-python">def make_map(features):
print('&gt; Making map...')
coords_belgium=[50.5039, 4.4699]
pollution_map = folium.Map(location=coords_belgium, control_scale=True, zoom_start=8)
TimestampedGeoJson(
{'type': 'FeatureCollection',
'features': features}
, period='P1M'
, add_last_point=True
, auto_play=False
, loop=False
, max_speed=1
, loop_button=True
, date_options='YYYY/MM'
, time_slider_drag_update=True
).add_to(pollution_map)
print('&gt; Done.')
return pollution_map
def plot_pollutant(pollutant_ID):
print('Mapping {} pollution in Belgium in 2013-2015'.format(pollutants[pollutant_ID]['name']))
df = load_data(pollutant_ID)
df = clean_data(df)
df = prepare_data(df, pollutant_ID)
features = create_geojson_features(df)
return make_map(features), df</code></pre><p>Below are the maps per air pollutant. You can click on the image to go to a web page with the interactive map. By clicking on the <em><em>play</em></em> button, you can see the evolution of the air pollutant over time.</p><h2 id="sulphur-dioxide">Sulphur dioxide</h2><pre><code class="language-python">pollution_map, df = plot_pollutant(1)
pollution_map.save('../output/pollution_so2.html')
pollution_map.save('../output/pollution_pm.html')
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
