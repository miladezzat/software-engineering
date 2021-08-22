---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9b81740569d1a4ca2c32.jpg"
tags: [Python]
description: "Many Python developers in the financial world are tasked with"
author: "Milad E. Fahmy"
title: "How to Create Auto-Updating Excel Spreadsheets of Stock Market Data with Python, AWS, and IEX Cloud"
created: "2021-08-16T15:36:54+02:00"
modified: "2021-08-16T15:36:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-finance ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create Auto-Updating Excel Spreadsheets of Stock Market Data with Python, AWS, and IEX Cloud</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b81740569d1a4ca2c32.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b81740569d1a4ca2c32.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b81740569d1a4ca2c32.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b81740569d1a4ca2c32.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b81740569d1a4ca2c32.jpg" alt="How to Create Auto-Updating Excel Spreadsheets of Stock Market Data with Python, AWS, and IEX Cloud">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
'MSFT',
'AAPL',
'AMZN',
'GOOG',
'FB',
'BRK.B',
'JNJ',
'WMT',
'V',
'PG'
]</code></pre><figcaption>These are the largest 10 companies in the United States based on market capitalization. Note that the actual list of top 10 companies will change over time. This list is current as of mid-April 2020.</figcaption></figure><p>Next, it is time to figure out how to ping the IEX Cloud API to pull in the metrics we need for each company. </p><p>The IEX Cloud API returns JSON objects in response to HTTP requests. Since we are working with more than 1 ticker in this tutorial, we will use IEX Cloud's batch API call functionality, which allows you to request data on more than one ticker at a time. Using batch API calls has two benefits:</p><ul><li>It reduces the number of HTTP requests you need to make, which will make your code more performant.</li><li>The pricing for batch API calls is slightly better with most data providers.</li></ul><p>Here is an example of what the HTTP request might look like, with a few placeholder words where we'll need to customize the request:</p><pre><code>https://cloud.iexapis.com/stable/stock/market/batch?symbols=TICKERS&amp;types=ENDPOINTS&amp;range=RANGE&amp;token=IEX_API_Key</code></pre><p>In this URL, we'll replace these variables with the following values:</p><ul><li><code>TICKERS</code> will be replaced by a string that contains each of our tickers separated by a comma.</li><li><code>ENDPOINTS</code> will be replaced by a string that contains each of the IEX Cloud endpoints we want to hit, separated by a comma.</li><li><code>RANGE</code> will be replaced by <code>1y</code>. These endpoints each contain point-in-time data and not time series data, so this range can really be whatever you want.</li></ul><p>Let's put this URL into a variable called <code>HTTP_request</code> for us to modify later:</p><pre><code class="language-python">HTTP_request = 'https://cloud.iexapis.com/stable/stock/market/batch?symbols=TICKERS&amp;types=ENDPOINTS&amp;range=RANGE&amp;token=IEX_API_Key'</code></pre><p>Let's work through each of these variables one-by-one to determine the exact URL that we need to hit.</p><p>For the <code>TICKERS</code> variable, we can generate a real Python variable (and not just a placeholder word) with a simple <code>for</code> loop:</p><pre><code class="language-python">#Create an empty string called `ticker_string` that we'll add tickers and commas to
ticker_string = ''
#Loop through every element of `tickers` and add them and a comma to ticker_string
for ticker in tickers:
ticker_string += ticker
ticker_string += ','
#Drop the last comma from `ticker_string`
ticker_string = ticker_string[:-1]</code></pre><p>Now we can interpolate our <code>ticker_string</code> variable into the <code>HTTP_request</code> variable that we created earlier using an f-string:</p><pre><code class="language-python">HTTP_request = f'https://cloud.iexapis.com/stable/stock/market/batch?symbols={ticker_string}&amp;types=ENDPOINTS&amp;range=RANGE&amp;token=IEX_API_Key'</code></pre><p>Next, we need to determine which IEX Cloud endpoints we need to ping. </p><p>Some quick investigation into the IEX Cloud documentation reveals that we only need the <code>price</code> and <code>stats</code> endpoints to create our spreadsheet. </p><p>Thus, we can replace the placeholder <code>ENDPOINTS</code> word from our original HTTP request with the following variable:</p><pre><code class="language-python">endpoints = 'price,stats'</code></pre><p>Like we did with our <code>ticker_string</code> variable, let's substitute the <code>endpoints</code> variable into the <code>ticker_string</code> variable:</p><pre><code class="language-python">HTTP_request = f'https://cloud.iexapis.com/stable/stock/market/batch?symbols={ticker_string}&amp;types={endpoints}&amp;range=RANGE&amp;token=IEX_API_Key'</code></pre><p>The last placeholder we need to replace is <code>RANGE</code>. We will not replace with this a variable. Instead, we can hardcode a <code>1y</code> directly into the URL path like this:</p><pre><code>https://cloud.iexapis.com/stable/stock/market/batch?symbols={ticker_string}&amp;types={endpoints}&amp;range=1y&amp;token=IEX_API_Key</code></pre><p>We've done a lot so far, so let's recap our code base:</p><pre><code class="language-python">import pandas as pd
IEX_API_Key = ''
#Specify the stock tickers that will be included in our spreadsheet
tickers = [
'MSFT',
'AAPL',
'AMZN',
'GOOG',
'FB',
'BRK.B',
'JNJ',
'WMT',
'V',
'PG'
]
#Create an empty string called `ticker_string` that we'll add tickers and commas to
ticker_string = ''
#Loop through every element of `tickers` and add them and a comma to ticker_string
for ticker in tickers:
ticker_string += ticker
ticker_string += ','
#Drop the last comma from `ticker_string`
ticker_string = ticker_string[:-1]
#Create the endpoint strings
endpoints = 'price,stats'
#Interpolate the endpoint strings into the HTTP_request string
#Parse the company's name - not completed yet
company_name = ''
#Parse the company's stock price - not completed yet
stock_price = 0
#Parse the company's dividend yield - not completed yet
dividend_yield = 0
new_column = pd.Series([ticker, company_name, stock_price, dividend_yield])
for ticker in raw_data.columns:
#Parse the company's name - not completed yet
company_name = raw_data[ticker]['stats']['companyName']
#Parse the company's stock price - not completed yet
stock_price = 0
#Parse the company's dividend yield - not completed yet
dividend_yield = 0
new_column = pd.Series([ticker, company_name, stock_price, dividend_yield])
output_data = output_data.append(new_column, ignore_index = True)</code></pre><p>Let's move on to parsing <code>stock_price</code>.</p><h3 id="metric-3-stock-price">Metric 3: Stock Price</h3><p>The <code>stock_price</code> variable is contained within the <code>price</code> endpoint, which returns only a single value. This means we do not need to chain together indexes like we did with <code>company_name</code>. </p><p>Here's how we could parse <code>stock_price</code> from <code>raw_data</code>:</p><pre><code class="language-python">raw_data[ticker]['price']</code></pre><p>Including this in our <code>for</code> loop gives us:</p><pre><code class="language-python">output_data = pd.DataFrame(pd.np.empty((0,4)))
for ticker in raw_data.columns:
#Parse the company's name - not completed yet
company_name = raw_data[ticker]['stats']['companyName']
#Parse the company's stock price - not completed yet
stock_price = raw_data[ticker]['price']
#Parse the company's dividend yield - not completed yet
dividend_yield = 0
new_column = pd.Series([ticker, company_name, stock_price, dividend_yield])
output_data = output_data.append(new_column, ignore_index = True)</code></pre><p>The last metric we need to parse is <code>dividend_yield</code>.</p><h3 id="metric-4-dividend-yield">Metric 4: Dividend Yield</h3><p>Like <code>company_name</code>, <code>dividend_yield</code> is contained in the <code>stats</code> endpoint. It is held under the <code>dividendYield</code> dictionary key. </p><p>Here is how we could parse it out of <code>raw_data</code>:</p><pre><code class="language-python">raw_data[ticker]['stats']['dividendYield']</code></pre><p>Adding this to our <code>for</code> loop gives us:</p><pre><code class="language-python">output_data = pd.DataFrame(pd.np.empty((0,4)))
for ticker in raw_data.columns:
#Parse the company's name - not completed yet
company_name = raw_data[ticker]['stats']['companyName']
#Parse the company's stock price - not completed yet
stock_price = raw_data[ticker]['price']
#Parse the company's dividend yield - not completed yet
dividend_yield = raw_data[ticker]['stats']['dividendYield']
new_column = pd.Series([ticker, company_name, stock_price, dividend_yield])
IEX_API_Key = ''
#Specify the stock tickers that will be included in our spreadsheet
tickers = [
'MSFT',
'AAPL',
'AMZN',
'GOOG',
'FB',
'BRK.B',
'JNJ',
'WMT',
'V',
'PG'
]
#Create an empty string called `ticker_string` that we'll add tickers and commas to
ticker_string = ''
#Loop through every element of `tickers` and add them and a comma to ticker_string
for ticker in tickers:
ticker_string += ticker
ticker_string += ','
#Drop the last comma from `ticker_string`
ticker_string = ticker_string[:-1]
#Create the endpoint strings
endpoints = 'price,stats'
#Interpolate the endpoint strings into the HTTP_request string
HTTP_request = f'https://cloud.iexapis.com/stable/stock/market/batch?symbols={ticker_string}&amp;types={endpoints}&amp;range=1y&amp;token={IEX_API_Key}'
#Create an empty pandas DataFrame to append our parsed values into during our for loop
output_data = pd.DataFrame(pd.np.empty((0,4)))
for ticker in raw_data.columns:
#Parse the company's name
company_name = raw_data[ticker]['stats']['companyName']
#Parse the company's stock price
stock_price = raw_data[ticker]['price']
#Parse the company's dividend yield
dividend_yield = raw_data[ticker]['stats']['dividendYield']
new_column = pd.Series([ticker, company_name, stock_price, dividend_yield])
output_data = output_data.append(new_column, ignore_index = True)
#Change the column names of output_data
output_data.columns = ['Ticker', 'Company Name', 'Stock Price', 'Dividend Yield']
#Change the index of output_data
output_data.set_index('Ticker', inplace=True)
#Replace the missing values of the 'Dividend Yield' column with 0
output_data['Dividend Yield'].fillna(0,inplace=True)
#Print the DataFrame
output_data
</code></pre><p>From there, we need to call the <code>to_excel</code> method on our <code>pandas DataFrame</code>. This time, instead of passing in the name of the file that we're trying to export, we'll pass in the <code>writer</code> object that we just created:</p><pre><code class="language-python">output_data.to_excel(writer, sheet_name='Sheet1')
</code></pre><p>Lastly, we will call the <code>save</code> method on our <code>writer</code> object, which saves the <code>xlsx</code> file to our current working directory. When all this is done, here is the section of our Python script that saves <code>output_data</code> to an Excel file.</p><pre><code class="language-python">writer = pd.ExcelWriter('stock_market_data.xlsx', engine='xlsxwriter')
output_data.to_excel(writer, sheet_name='Sheet1')
writer.save()</code></pre><p>All of the formatting code that we will include in our <code>xlsx</code> file needs to be contained between the creation of the <code>ExcelWriter</code> object and the <code>writer.save()</code> statement.</p><h3 id="how-to-style-an-xlsx-file-created-with-python">How to Style an <code>xlsx</code> File Created with Python</h3><p>It is actually harder than you might think to style an Excel file using Python. </p><p>This is partially because of some of the limitations of the XlsxWriter package. Its documentation states: </p><blockquote><em>'XlsxWriter and Pandas provide very little support for formatting the output data from a dataframe apart from default formatting such as the header and index cells and any cells that contain dates or datetimes. In addition it isn’t possible to format any cells that already have a default format applied.</em></blockquote><blockquote><em>If you require very controlled formatting of the dataframe output then you would probably be better off using Xlsxwriter directly with raw data taken from Pandas. However, some formatting options are available.'</em></blockquote><p>In my experience, the most flexible way to style cells in an <code>xlsx</code> file created by XlsxWriter is to use conditional formatting that only applies styling when a cell is not equal to <code>None</code>. </p><p>This has three advantages:</p><ol><li>It provides more styling flexibility than the normal formatting options available in XlsxWriter.</li><li>You do not need to manually loop through each data point and import them into the <code>writer</code> object one-by-one.</li><li>It allows you to easily see when <code>None</code> values have made their way into your finalized <code>xlsx</code> files, since they'll be missing the required formatting.</li></ol><p>To apply styling using conditional formatting, we first need to create a few style templates. Specifically, we will need four templates:</p><ul><li>One <code>header_template</code> that will be applied to the column names at the top of the spreadsheet</li><li>One <code>string_template</code> that will be applied to the <code>Ticker</code> and <code>Company Name</code> columns</li><li>One <code>dollar_template</code> that will be applied to the <code>Stock Price</code> column</li><li>One <code>percent_template</code> that will be applied to the <code>Dividend Yield</code> column</li></ul><p>Each of these format templates need to be added to the <code>writer</code> object in dictionaries that resemble CSS syntax. Here's what I mean:</p><pre><code class="language-python">header_template = writer.book.add_format(
{
'font_color': '#ffffff',
'bg_color': '#135485',
'border': 1
}
)
string_template = writer.book.add_format(
{
'bg_color': '#DADADA',
'border': 1
}
)
dollar_template = writer.book.add_format(
{
'num_format':'$0.00',
'bg_color': '#DADADA',
'border': 1
}
)
percent_template = writer.book.add_format(
{
'num_format':'0.0%',
'bg_color': '#DADADA',
'border': 1
}
)</code></pre><p>To apply these formats to specific cells in our <code>xlsx</code> file, we need to call the package's <code>conditional_format</code> method on &nbsp;<code>writer.sheets['Stock Market Data']</code>. Here is an example:</p><pre><code class="language-python">writer.sheets['Stock Market Data'].conditional_format('A2:B11',
{
'type':     'cell',
'criteria': '&lt;&gt;',
'value':    '"None"',
'format':   string_template
}
)
</code></pre><p>If we generalize this formatting to the other three formats we're applying, here's what the formatting section of our Python script becomes:</p><pre><code class="language-python">writer = pd.ExcelWriter('stock_market_data.xlsx', engine='xlsxwriter')
output_data.to_excel(writer, sheet_name='Stock Market Data')
header_template = writer.book.add_format(
{
'font_color': '#ffffff',
'bg_color': '#135485',
'border': 1
}
)
string_template = writer.book.add_format(
{
'bg_color': '#DADADA',
'border': 1
}
)
dollar_template = writer.book.add_format(
{
'num_format':'$0.00',
'bg_color': '#DADADA',
'border': 1
}
)
percent_template = writer.book.add_format(
{
'num_format':'0.0%',
'bg_color': '#DADADA',
'border': 1
}
)
#Format the header of the spreadsheet
writer.sheets['Stock Market Data'].conditional_format('A1:D1',
{
'type':     'cell',
'criteria': '&lt;&gt;',
'value':    '"None"',
'format':   header_template
}
)
#Format the 'Ticker' and 'Company Name' columns
writer.sheets['Stock Market Data'].conditional_format('A2:B11',
{
'type':     'cell',
'criteria': '&lt;&gt;',
'value':    '"None"',
'format':   string_template
}
)
#Format the 'Stock Price' column
writer.sheets['Stock Market Data'].conditional_format('C2:C11',
{
'type':     'cell',
'criteria': '&lt;&gt;',
'value':    '"None"',
'format':   dollar_template
}
)
#Format the 'Dividend Yield' column
writer.sheets['Stock Market Data'].conditional_format('D2:D11',
{
'type':     'cell',
'criteria': '&lt;&gt;',
'value':    '"None"',
'format':   percent_template
}
)
writer.sheets['Stock Market Data'].set_column('B:B', 32)
writer.sheets['Stock Market Data'].set_column('C:C', 18)
</code></pre><p>Run this statement with the necessary replacements to move <code>stock_market_data.py</code> into the EC2 instance. </p><p>Trying to run <code>stock_market_data.py</code> at this point will actually result in an error because the EC2 instance does not come with the necessary Python packages. </p><p>To fix this, you can either export a <code>requirements.txt</code> file and import the proper packages using <code>pip</code>, or you can simply run the following:</p><pre><code>sudo yum install python3-pip
pip3 install pandas
</code></pre><p>You will also need to import the library into <code>stock_market_data.py</code> by adding the following statement to the top of the Python script.</p><pre><code class="language-python">import boto3</code></pre><p>We will need to add a few lines of code to the end of <code>stock_market_data.py</code> to push the final document to AWS S3.</p><pre><code class="language-python">s3 = boto3.resource('s3')
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
