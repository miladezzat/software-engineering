---
card: "/images/default.jpg"
tags: [Python]
description: "In an earlier freeCodeCamp tutorial, I explained how to creat"
author: "Milad E. Fahmy"
title: "How to Embed Interactive Python Visualizations on Your Website with Python and Matplotlib"
created: "2021-08-16T15:36:47+02:00"
modified: "2021-08-16T15:36:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-data-science tag-data-visualization ">
<header class="post-full-header">
<h1 class="post-full-title">How to Embed Interactive Python Visualizations on Your Website with Python and Matplotlib</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/bank_data.png 300w,
/news/content/images/size/w600/2020/05/bank_data.png 600w,
/news/content/images/size/w1000/2020/05/bank_data.png 1000w,
/news/content/images/size/w2000/2020/05/bank_data.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/bank_data.png" alt="How to Embed Interactive Python Visualizations on Your Website with Python and Matplotlib">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
#Import dependencies
########################
import pandas as pd
import matplotlib.pyplot as plt
########################
#Import and clean data
########################
IEX_API_Key = ''
tickers = [
'JPM',
'BAC',
'C',
'WFC',
'GS',
]
#Create an empty string called `ticker_string` that we'll add tickers and commas to
ticker_string = ''
#Loop through every element of `tickers` and add them and a comma to ticker_string
for ticker in tickers:
ticker_string += ticker
ticker_string += ','
#Drop the last comma from `ticker_string`
ticker_string = ticker_string[:-1]
#Create the endpoint and years strings
endpoints = 'chart'
years = '5'
#Interpolate the endpoint strings into the HTTP_request string
HTTP_request = f'https://cloud.iexapis.com/stable/stock/market/batch?symbols={ticker_string}&amp;types={endpoints}&amp;range={years}y&amp;cache=true&amp;token={IEX_API_Key}'
#Send the HTTP request to the IEX Cloud API and store the response in a pandas DataFrame
bank_data = pd.read_json(HTTP_request)
#Create an empty list that we will append pandas Series of stock price data into
series_list = []
#Loop through each of our tickers and parse a pandas Series of their closing prices over the last 5 years
for ticker in tickers:
series_list.append(pd.DataFrame(bank_data[ticker]['chart'])['close'])
#Add in a column of dates
series_list.append(pd.DataFrame(bank_data['JPM']['chart'])['date'])
#Copy the 'tickers' list from earlier in the script, and add a new element called 'Date'.
#These elements will be the column names of our pandas DataFrame later on.
column_names = tickers.copy()
column_names.append('Date')
#Concatenate the pandas Series togehter into a single DataFrame
bank_data = pd.concat(series_list, axis=1)
#Name the columns of the DataFrame and set the 'Date' column as the index
bank_data.columns = column_names
bank_data.set_index('Date', inplace = True)
########################
#Create the Python figure
########################
#Set the size of the matplotlib canvas
fig = plt.figure(figsize = (18,8))
################################################
################################################
#Create subplots in Python
################################################
################################################
########################
#Subplot 1
########################
plt.subplot(2,2,1)
#Generate the boxplot
plt.boxplot(bank_data.transpose())
#Add titles to the chart and axes
plt.title('Boxplot of Bank Stock Prices (5Y Lookback)')
plt.xlabel('Bank')
plt.ylabel('Stock Prices')
#Add labels to each individual boxplot on the canvas
ticks = range(1, len(bank_data.columns)+1)
labels = list(bank_data.columns)
plt.xticks(ticks,labels)
########################
#Subplot 2
########################
plt.subplot(2,2,2)
#Create the x-axis data
dates = bank_data.index.to_series()
dates = [pd.to_datetime(d) for d in dates]
#Create the y-axis data
WFC_stock_prices =  bank_data['WFC']
#Generate the scatterplot
plt.scatter(dates, WFC_stock_prices)
#Add titles to the chart and axes
plt.title("Wells Fargo Stock Price (5Y Lookback)")
plt.ylabel("Stock Price")
plt.xlabel("Date")
########################
#Subplot 3
########################
plt.subplot(2,2,3)
#Create the x-axis data
dates = bank_data.index.to_series()
dates = [pd.to_datetime(d) for d in dates]
#Create the y-axis data
BAC_stock_prices =  bank_data['BAC']
#Generate the scatterplot
plt.scatter(dates, BAC_stock_prices)
#Add titles to the chart and axes
plt.title("Bank of America Stock Price (5Y Lookback)")
plt.ylabel("Stock Price")
plt.xlabel("Date")
########################
#Subplot 4
########################
plt.subplot(2,2,4)
#Generate the histogram
plt.hist(bank_data.transpose(), bins = 50)
#Add a legend to the histogram
plt.legend(bank_data.columns,fontsize=10)
#Add titles to the chart and axes
plt.title("A Histogram of Daily Closing Stock Prices for the 5 Largest Banks in the US (5Y Lookback)")
plt.ylabel("Observations")
plt.xlabel("Stock Prices")
plt.tight_layout()
################################################
#Save the figure to our local machine
################################################
plt.savefig('bank_data.png')</code></pre><p>Now that we have an understanding of the specific visualization we'll be working with, let's talk about what it means for a visualization to be interactive.</p><h2 id="what-does-it-mean-for-a-visualization-to-be-interactive">What Does It Mean for a Visualization to be Interactive?</h2><p>There are two types of data visualizations that are useful to embed on your website.</p><p>The first type is a static visualization. This is basically an image - think <code>.png</code> or <code>.jpg</code> files.</p><p>The second type is a dynamic visualization. These visualizations change in response to user behavior, usually by panning or zooming. Dynamic visualizations are not stored in <code>.png</code> or <code>.jpg</code> files but usually in <code>svg</code> or <code>iframe</code> tags.</p><p>This tutorial is about creating dynamic data visualizations. Specifically, the visualization we want to create will have the following characteristics:</p><ol><li>You will click a button in the bottom left to enable dynamic mode.</li><li>Once dynamic mode is enabled, you can zoom and pan the visualization with your mouse.</li><li>You can also crop and zoom to a specific section of the visualization.</li></ol><p>In the next section of this tutorial, you will learn how to install and import the <code>mpld3</code> library, which is the Python dependency that we'll use to create our interactive charts.</p><h2 id="how-to-import-the-mpld3-library">How to Import the mpld3 Library</h2><p>To use the <code>mpld3</code> library in our Python application, there are two steps that we need to complete first:</p><ol><li>Install the <code>mpld3</code> library on the machine we're working on.</li><li>Import the <code>mpld3</code> library into our Python script.</li></ol><p>First, let's install <code>mpld3</code> on our local machine.</p><p>The easiest way to do this is using the <code>pip</code> package manager for Python3. If you already have <code>pip</code> installed on your machine, you can do this by running the following statement from your command line:</p><pre><code class="language-bash">pip3 install mpld3</code></pre><p>Now that <code>mpld3</code> is installed on our machine, we can import it into our Python script with the following statement:</p><pre><code class="language-python">import mpld3</code></pre><p>For readability's sake, it is considered a best practice to include this import along with the rest of your imports at the top of your script. This means that your import section will now look like this:</p><pre><code class="language-python">########################
#Import dependencies
########################
import pandas as pd
import matplotlib.pyplot as plt
import mpld3</code></pre><h2 id="how-to-transform-a-static-matplotlib-visualizations-into-an-interactive-data-visualization">How To Transform a Static <code>matplotlib</code> Visualizations into an Interactive Data Visualization</h2><p>The <code>mpld3</code> library's main functionality is to take an existing <code>matplotlib</code> visualization and transform it into some HTML code that you can embed on your website.</p><p>The tool we use for this is <code>mpld3</code>'s <code>fig_to_html</code> file, which accepts a <code>matplotlib</code> <code>figure</code> object as its sole argument and returns HTML.</p><p>To use the <code>fig_to_html</code> method for our purpose, simply add the following code to the end of our Python script:</p><pre><code class="language-python">html_str = mpld3.fig_to_html(fig)
Html_file= open("index.html","w")
Html_file.write(html_str)
<style>
</style>
<div id="fig_el9485945779489608822319421"></div>
""" Special json encoder for numpy types """
def default(self, obj):
if isinstance(obj, (numpy.int_, numpy.intc, numpy.intp, numpy.int8,
numpy.int16, numpy.int32, numpy.int64, numpy.uint8,
numpy.uint16,numpy.uint32, numpy.uint64)):
return int(obj)
elif isinstance(obj, (numpy.float_, numpy.float16, numpy.float32,
numpy.float64)):
return float(obj)
try: # Added by ceprio 2018-04-25
iterable = iter(obj)
except TypeError:
pass
else:
return list(iterable)
# Let the base class default method raise the TypeError
return json.JSONEncoder.default(self, obj)</code></pre><p>Once this replacement is made, then your code should function properly and your <code>index.html</code> file should generate successfully. </p><h2 id="final-thoughts">Final Thoughts</h2><p>In this tutorial, you learned how to create interactive data visualizations in Python using the matplotlib and mpld3 libraries. Here is a specific summary of what we covered:</p><ol><li>The definition of a dynamic data visualization</li><li>How to install and import the <code>mpld3</code> library for Python</li><li>How to use the <code>mpld3</code> library to transform a <code>matplotlib</code> visualization into a dynamic visualization that you can embed on your website</li><li>How to fix a common error that users of the <code>mpld3</code> library experience</li></ol><p>This tutorial was written by <a href="https://nickmccullum.com/">Nick McCullum</a>, who teaches <a href="https://nickmccullum.com/advanced-python/">Python</a> and <a href="https://nickmccullum.com/javascript/">JavaScript</a> development on his website. </p>
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
