---
card: "/images/default.jpg"
tags: [Python]
description: "Technology has become an asset in finance. Financial institut"
author: "Milad E. Fahmy"
title: "Python for Finance – Algorithmic Trading Tutorial for Beginners"
created: "2021-08-16T15:35:29+02:00"
modified: "2021-08-16T15:35:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-algorithms tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">Python for Finance – Algorithmic Trading Tutorial for Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/Algorithmic-Trading-in-Python-Explained.jpg 300w,
/news/content/images/size/w600/2020/09/Algorithmic-Trading-in-Python-Explained.jpg 600w,
/news/content/images/size/w1000/2020/09/Algorithmic-Trading-in-Python-Explained.jpg 1000w,
/news/content/images/size/w2000/2020/09/Algorithmic-Trading-in-Python-Explained.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/Algorithmic-Trading-in-Python-Explained.jpg" alt="Python for Finance – Algorithmic Trading Tutorial for Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import quandl as q</code></pre><p>Pandas is going to be the most rigorously used package in this tutorial as we’ll be doing a lot of data manipulation and plotting.</p><p>After the packages are imported, we will make requests to the Quandl API by using the Quandl package:</p><pre><code># set the API key
q.ApiConfig.api_key = "&lt;API key&gt;”</code></pre><pre><code>#send a get request to query Microsoft's end of day stock prices from 1st #Jan, 2010 to 1st Jan, 2019
msft_data = q.get("EOD/MSFT", start_date="2010-01-01", end_date="2019-01-01")</code></pre><pre><code># look at the first 5 rows of the dataframe
import numpy as np</code></pre><pre><code># assign `Adj Close` to `daily_close`
daily_close = msft_data[['Adj_Close']]</code></pre><pre><code># returns as fractional change
daily_return = daily_close.pct_change()</code></pre><pre><code># replacing NA values with 0
daily_return.fillna(0, inplace=True)</code></pre><pre><code>print(daily_return)</code></pre><p>This will print the returns that the stock has been generating on a daily basis. Multiplying the number by 100 will give you the percentage change.</p><p>The formula used in pct_change() is:</p><blockquote>Return = {(Price at t) — (Price at t-1)} / {Price at t-1}</blockquote><p>Now, to calculate monthly returns, all you need to do is:</p><pre><code>mdata = msft_data.resample('M').apply(lambda x: x[-1])
monthly_return = mdata.pct_change()</code></pre><p>After resampling the data to months (for business days), we can get the last day of trading in the month using the <code>apply()</code> function.</p><p><code>apply()</code> takes in a function and applies it to each and every row of the Pandas series. The <code>lambda</code> function is an anonymous function in Python which can be defined without a name, and only takes expressions in the following format:</p><pre><code>Lambda: expression</code></pre><p>For example, <code>lambda x: x * 2</code> is a lambda function. Here, x is the argument and <code>x * 2</code> is the expression that gets evaluated and returned.</p><h2 id="moving-averages-in-trading">Moving Averages in Trading</h2><p>The concept of moving averages is going to build the base for our momentum-based trading strategy. </p><p>In finance, analysts often have to evaluate statistical metrics continually over a sliding window of time, which is called moving window calculations. </p><p>Let’s see how we can calculate the rolling mean over a window of 50 days, and slide the window by 1 day.</p><h3 id="rolling-">rolling()</h3><p>This is the magical function which does the tricks for us:</p><pre><code># assigning adjusted closing prices to
adj_pricesadj_price = msft_data['Adj_Close']</code></pre><pre><code># calculate the moving average
import matplotlib.pyplot as plt
short_lb = 50long_lb = 120</code></pre><pre><code># step2: initialize a new DataFrame called signal_df with a signal column
signal_df = pd.DataFrame(index=msft_data.index)signal_df['signal'] = 0.0</code></pre><pre><code># step3: create a short simple moving average over the short lookback period
signal_df['short_mav'] = msft_data['Adj_Close'].rolling(window=short_lb,                               min_periods=1, center=False).mean()</code></pre><pre><code># step4: create long simple moving average over the long lookback period
signal_df['long_mav'] = msft_data['Adj_Close'].rolling(window=long_lb, min_periods=1, center=False).mean()</code></pre><pre><code># step5: generate the signals based on the conditional statement
signal_df['signal'][short_lb:] = np.where(signal_df['short_mav'][short_lb:] &gt; signal_df['long_mav'][short_lb:], 1.0, 0.0)   </code></pre><pre><code># step6: create the trading orders based on the positions column
signal_df['positions'] = signal_df['signal'].diff()signal_df[signal_df['positions'] == -1.0]</code></pre><p>Let’s see what’s happening here. We have created 2 lookback periods. The short lookback period <code>short_lb</code> is 50 days, and the longer lookback period for the long moving average is defined as a <code>long_lb</code> of 120 days.</p><p>We have created a new DataFrame which is designed to capture the signals. These signals are being generated whenever the short moving average crosses the long moving average using the <code>np.where</code>. It assigns <code>1.0</code> for true and <code>0.0</code> if the condition comes out to be false.</p><p>The <code>positions</code> columns in the DataFrame tells us if there is a buy signal or a sell signal, or to stay put. We're basically calculating the difference in the signals column from the previous row using <a href="https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.Series.diff.html" rel="noopener">diff</a>.</p><p>And there we have our strategy implemented in just 6 steps using Pandas. Easy, wasn't it?</p><p>Now, let’s try to visualize this using Matplotlib. All we need to do is initialize a plot figure, add the adjusted closing prices, short, and long moving averages to the plot, and then plot the buy and sell signals using the positions column in the <code>signal_df</code> above:</p><pre><code># initialize the plot using plt
fig = plt.figure()</code></pre><pre><code># Add a subplot and label for y-axis
plt1 = fig.add_subplot(111,  ylabel='Price in $')</code></pre><pre><code>msft_data['Adj_Close'].plot(ax=plt1, color='r', lw=2.)</code></pre><pre><code># plot the short and long lookback moving averages
signal_df[['short_mav', 'long_mav']].plot(ax=plt1, lw=2., figsize=(12,8))</code></pre><pre><code># plotting the sell signals
plt1.plot(signal_df.loc[signal_df.positions == -1.0].index,                   signal_df.short_mav[signal_df.positions == -1.0],'v',                     markersize=10, color='k')</code></pre><pre><code># plotting the buy signals
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
