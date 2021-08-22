---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9b49740569d1a4ca2adf.jpg"
tags: [Python]
description: "Python is an excellent programming language for creating data"
author: "Milad E. Fahmy"
title: "How to Create Auto-Updating Data Visualizations in Python with IEX Cloud, Matplotlib, and AWS"
created: "2021-08-16T15:36:50+02:00"
modified: "2021-08-16T15:36:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-data-science tag-data-visualization ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create Auto-Updating Data Visualizations in Python with IEX Cloud, Matplotlib, and AWS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b49740569d1a4ca2adf.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b49740569d1a4ca2adf.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b49740569d1a4ca2adf.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b49740569d1a4ca2adf.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b49740569d1a4ca2adf.jpg" alt="How to Create Auto-Updating Data Visualizations in Python with IEX Cloud, Matplotlib, and AWS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Python is an excellent programming language for creating data visualizations.</p><p>However, working with a raw programming language like Python (instead of more sophisticated software like, say, Tableau) presents some challenges. Developers creating visualizations must accept more technical complexity in exchange for vastly more input into how their visualizations look.</p><p>In this tutorial, I will teach you how to create automatically-updating Python visualizations. We'll use data from IEX Cloud and we'll also use the matplotlib library and some simple Amazon Web Services product offerings.</p><h2 id="step-1-gather-your-data">Step 1: Gather Your Data</h2><p>Automatically updating charts sound appealing. But before you invest the time in building them, it is important to understand whether or not you need your charts to be automatically updated. </p><p>To be more specific, there is no need for your visualizations to update automatically if the data they are presenting does not change over time. </p><p>Writing a Python script that automatically updates a chart of Michael Jordan's annual points-per-game would be useless - his career is over, and that data set is never going to change.</p><p>The best data set candidates for auto-updating visualizations are time series data where new observations are being added on a regular basis (say, each day). </p><p>In this tutorial, we are going to be using stock market data from the <a href="https://iexcloud.io/">IEX Cloud API</a>. Specifically, we will be visualizing historical stock prices for a few of the largest banks in the US:</p><ul><li>JPMorgan Chase (JPM)</li><li>Bank of America (BAC)</li><li>Citigroup (C)</li><li>Wells Fargo (WFC)</li><li>Goldman Sachs (GS)</li></ul><p>The first thing that you'll need to do is create an IEX Cloud account and generate an API token. </p><p>For obvious reasons, I'm not going to be publishing my API key in this article. Storing your own personalized API key in a variable called <code>IEX API Key</code> will be enough for you to follow along.</p><p>Next, we're going to store our list of tickers in a Python list:</p><pre><code class="language-python">tickers = [
'JPM',
'BAC',
'C',
'WFC',
'GS',
]</code></pre><p>The IEX Cloud API accepts tickers separated by commas. We need to serialize our ticker list into a separated string of tickers. Here is the code we will use to do this:</p><pre><code class="language-python">#Create an empty string called `ticker_string` that we'll add tickers and commas to
ticker_string = ''
#Loop through every element of `tickers` and add them and a comma to ticker_string
for ticker in tickers:
ticker_string += ticker
ticker_string += ','
#Drop the last comma from `ticker_string`
ticker_string = ticker_string[:-1]</code></pre><p>The next task that we need to handle is to select which endpoint of the IEX Cloud API that we need to ping. </p><p>A quick review of IEX Cloud's documentation reveals that they have a <code>Historical Prices</code> endpoint, which we can send an HTTP request to using the <code>charts</code> keyword.</p><p>We will also need to specify the amount of data that we're requesting (measured in years). </p><p>To target this endpoint for the specified data range, I have stored the <code>charts</code> endpoint and the amount of time in separate variables. These endpoints are then interpolated into the serialized URL that we'll use to send our HTTP request.</p><p>Here is the code:</p><pre><code class="language-python">#Create the endpoint and years strings
endpoints = 'chart'
years = '10'
#Interpolate the endpoint strings into the HTTP_request string
series_dict.update( {ticker : pd.DataFrame(bank_data[ticker]['chart'])['close']} )</code></pre><p>Now we can create our finalized pandas DataFrame that has the date as its index and a column for the closing price of every major bank stock over the last 5 years:</p><pre><code class="language-python">series_list = []
for ticker in tickers:
series_list.append(pd.DataFrame(bank_data[ticker]['chart'])['close'])
series_list.append(pd.DataFrame(bank_data['JPM']['chart'])['date'])
column_names = tickers.copy()
column_names.append('Date')
bank_data = pd.concat(series_list, axis=1)
bank_data.columns = column_names
import matplotlib.pyplot as plt
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
#Concatenate the pandas Series together into a single DataFrame
bank_data = pd.concat(series_list, axis=1)
#Name the columns of the DataFrame and set the 'Date' column as the index
bank_data.columns = column_names
bank_data.set_index('Date', inplace = True)</code></pre><h2 id="step-2-create-the-chart-you-d-like-to-update">Step 2: Create the Chart You'd Like to Update</h2><p>In this tutorial, we'll be working with the matplotlib visualization library for Python.</p><p>Matplotlib is a tremendously sophisticated library and people spend years mastering it to their fullest extent. Accordingly, please keep in mind that we are only scratching the surface of matplotlib's capabilities in this tutorial.</p><p>We will start by importing the matplotlib library.</p><h3 id="how-to-import-matplotlib">How to Import Matplotlib</h3><p>By convention, data scientists generally import the <code>pyplot</code> library of matplotlib under the alias <code>plt</code>. </p><p>Here's the full import statement:</p><pre><code class="language-python">import matplotlib.pyplot as plt</code></pre><p>You will need to include this at the beginning of any Python file that uses matplotlib to generate data visualizations.</p><p>There are also other arguments that you can add with your matplotlib library import to make your visualizations easier to work with.</p><p>If you're working through this tutorial in a Jupyter Notebook, you may want to include the following statement, which will cause your visualizations to appear without needing to write a <code>plt.show()</code> statement:</p><pre><code class="language-python">%matplotlib inline</code></pre><p>If you're working in a Jupyter Notebook on a MacBook with a retina display, you can use the following statements to improve the resolution of your matplotlib visualizations in the notebook:</p><pre><code class="language-python">from IPython.display import set_matplotlib_formats
labels = list(bank_data.columns)
#Create a Python boxplot
########################
#Set the size of the matplotlib canvas
plt.figure(figsize = (18,12))
#Generate the boxplot
plt.boxplot(bank_data.transpose())
#Add titles to the chart and axes
plt.title('Boxplot of Bank Stock Prices (5Y Lookback)', fontsize = 20)
plt.xlabel('Bank', fontsize = 20)
plt.ylabel('Stock Prices', fontsize = 20)
#Add labels to each individual boxplot on the canvas
ticks = range(1, len(bank_data.columns)+1)
labels = list(bank_data.columns)
plt.xticks(ticks,labels, fontsize = 20)</code></pre><h3 id="how-to-create-scatterplots-in-matplotlib">How to Create Scatterplots in Matplotlib</h3><p><a href="https://nickmccullum.com/python-visualization/scatterplot/">Scatterplots</a> can be created in matplotlib using the <code>plt.scatter</code> method. </p><p>The <code>scatter</code> method has two required arguments - an <code>x</code> value and a <code>y</code> value.</p><p>Let's plot Wells Fargo's stock price over time using the <code>plt.scatter()</code> method. </p><p>The first thing we need to do is to create our x-axis variable, called <code>dates</code>:</p><pre><code class="language-python">dates = bank_data.index.to_series()</code></pre><p>Next, we will isolate Wells Fargo's stock prices in a separate variable:</p><pre><code class="language-python">WFC_stock_prices =  bank_data['WFC']
plt.ylabel("Stock Price", fontsize=20)
#Create a Python scatterplot
########################
#Set the size of the matplotlib canvas
plt.figure(figsize = (18,12))
#Create the x-axis data
dates = bank_data.index.to_series()
dates = [pd.to_datetime(d) for d in dates]
#Create the y-axis data
WFC_stock_prices =  bank_data['WFC']
#Generate the scatterplot
plt.scatter(dates, WFC_stock_prices)
#Add titles to the chart and axes
plt.title("Wells Fargo Stock Price (5Y Lookback)", fontsize=20)
plt.ylabel("Stock Price", fontsize=20)
plt.ylabel("Observations", fontsize = 20)
#Create a Python histogram
########################
#Set the size of the matplotlib canvas
plt.figure(figsize = (18,12))
#Generate the histogram
plt.hist(bank_data.transpose(), bins = 50)
#Add a legend to the histogram
plt.legend(bank_data.columns,fontsize=20)
#Add titles to the chart and axes
plt.title("A Histogram of Daily Closing Stock Prices for the 5 Largest Banks in the US (5Y Lookback)", fontsize = 20)
plt.ylabel("Observations", fontsize = 20)
plt.xlabel("Stock Prices", fontsize = 20)</code></pre><h3 id="how-to-create-subplots-in-matplotlib">How to Create Subplots in Matplotlib</h3><p>In matplotlib, <a href="https://nickmccullum.com/python-visualization/subplots/">subplots</a> are the name that we use to refer to multiple plots that are created on the same canvas using a single Python script.</p><p>Subplots can be created with the <code>plt.subplot</code> command. The command takes three arguments:</p><ul><li>The number of rows in a subplot grid</li><li>The number of columns in a subplot grid</li><li>Which subplot you currently have selected</li></ul><p>Let's create a 2x2 subplot grid that contains the following charts (in this specific order):</p><ol><li>The boxplot that we created previously</li><li>The scatterplot that we created previously</li><li>A similar scatteplot that uses <code>BAC</code> data instead of <code>WFC</code> data</li><li>The histogram that we created previously</li></ol><p>First, let's create the subplot grid:</p><pre><code class="language-python">plt.subplot(2,2,1)
plt.subplot(2,2,2)
plt.subplot(2,2,3)
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
plt.xlabel('Bank', fontsize = 20)
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
plt.legend(bank_data.columns,fontsize=20)
#Add titles to the chart and axes
plt.title("A Histogram of Daily Closing Stock Prices for the 5 Largest Banks in the US (5Y Lookback)")
plt.ylabel("Observations")
plt.xlabel("Stock Prices")
#Save the figure to our local machine
################################################
#Push the file to the AWS S3 bucket
################################################
s3 = boto3.resource('s3')
</code></pre><p>Run this statement with the necessary replacements to move <code>bank_stock_data.py</code> into the EC2 instance. </p><p>You might believe that you can now run your Python script from within your EC2 instance. Unfortunately, this is not the case. Your EC2 instance does not come with the necessary Python packages.</p><p>To install the packages we used, you can either export a <code>requirements.txt</code> file and import the proper packages using <code>pip</code>, or you can simply run the following:</p><pre><code>sudo yum install python3-pip
pip3 install pandas
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
