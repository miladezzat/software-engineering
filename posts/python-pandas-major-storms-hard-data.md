---
card: "/images/default.jpg"
tags: [Python]
description: "Sometimes it can be somehow comforting to reflect on how much"
author: "Milad E. Fahmy"
title: "How to Use Python and Pandas to Map Major Storms, Pessimism, and Hard Data"
created: "2021-08-16T15:34:49+02:00"
modified: "2021-08-16T15:34:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-data-science tag-data-analytics tag-pandas ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Python and Pandas to Map Major Storms, Pessimism, and Hard Data</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/thunderstorm-98541_640.png 300w,
/news/content/images/size/w600/2021/01/thunderstorm-98541_640.png 600w,
/news/content/images/size/w1000/2021/01/thunderstorm-98541_640.png 1000w,
/news/content/images/size/w2000/2021/01/thunderstorm-98541_640.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/thunderstorm-98541_640.png" alt="How to Use Python and Pandas to Map Major Storms, Pessimism, and Hard Data">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Sometimes it can be somehow comforting to reflect on how much worse everything is now than it was in the good old days. </p><p>"Kids have no respect."</p><p>"Everything costs way too much."</p><p>"Public officials don't inspire trust."</p><p>"And what about the weather? We never <em>used</em> to get so many devastating hurricanes, did we?"</p><p>Well I'm old enough to have been around the block a few times and I'm not sure. I wasn't exactly angelic as a child, things <em>always</em> cost more than we wanted them to, and public officials were never the most loved creatures on the planet. But major storms? I haven't a clue.</p><p>It turns out that there's a lot of excellent storm data out there, so there's no reason why we shouldn't at least search for some clues. And my attempts to add data analytics to <a href="https://bootstrap-it.com/davidclinton/">my existing stock of professional tools</a> might help, here. </p><p>First, though, we should carefully define some terms and fill in some background details.</p><h2 id="what-is-a-major-storm">What Is a Major Storm?</h2><p>Hurricanes - or, more accurately, tropical cyclones - are "tropical" in the sense that they form over oceans within tropical regions. The term "tropics" refers to the area of the earth's surface that falls within 23 degrees (or so) of the equator, to both its north and south. </p><p>The storms are called "cyclones" because the movement of their winds is cyclical (clockwise in the Southern Hemisphere and counterclockwise in the Northern Hemisphere).</p><p>Cyclones are fed by evaporated ocean water and leave torrential and often violent thunderstorms in their wake - especially after drifting over habited land areas.</p><p>In broad terms, a storm producing sustained winds of between around 34 and 63 knots (or between 39 and 72 miles per hour) is considered a tropical storm. Storms with winds above 64 knots (73 mph) are hurricanes (or, in the Western Pacific or North Indian Oceans, typhoons).</p><p>Hurricanes are measured by categories between one and five, where category five hurricanes are the most violent and dangerous.</p><h2 id="where-does-major-storm-data-come-from">Where Does Major Storm Data Come From?</h2><p>Reliable and largely consistent historical storm data exists, at least in the US, for the past century and a half. But properly understanding the context of that data will require some knowledge of how those observations were made over the years.</p><p>Until the 1940's, most observations were made by the crews of ocean-going ships. But ship's crews can only observe and report what they see, and what they see will be determined by where they go. </p><p>Before the opening of the Panama Canal in 1914, ships traveling between Europe and the Pacific ocean would follow a route around the southern tip of South America that largely missed US coastal areas. As a result, it's likely that a significant percentage of weather events were simply missed.</p><p>Similarly, the advent of aircraft reconnaissance in the 1940s would have allowed scientists to catch more events that would have earlier been missed. And the use of weather satellites from the 1960s on has allowed us to catch just about all ocean activity.</p><p>These changes, and their impact on storm data, are neatly summarized <a href="https://www.gfdl.noaa.gov/historical-atlantic-hurricane-and-tropical-storm-records/">on this page</a> from the US government National Oceanic and Atmospheric Administration (NOAA) site, based on a <a href="https://www.gfdl.noaa.gov/wp-content/uploads/files/user_files/gav/publications/vk_08_recount.pdf">data analysis study</a> performed for the Geophysical Fluid Dynamics Laboratory (GFDL).</p><h2 id="what-does-the-historical-record-show">What Does the Historical Record Show?</h2><p>So after all that background, what does the data actually say? Are serious hurricanes more common now than in the past? Well, according to the NOAA website, the answer is: "No." <a href="https://www.gfdl.noaa.gov/historical-atlantic-hurricane-and-tropical-storm-records/">Here's how they put it</a>:</p><blockquote>"Atlantic tropical storms lasting more than 2 days have not increased in number. Storms lasting less than two days have increased sharply, but this is likely due to better observations...We are unaware of a climate change signal that would result in an increase of only the shortest duration storms, while such an increase is qualitatively consistent with what one would expect from improvements with observational practices."</blockquote><p>You'll get the whole story, including a nice explanation for the data manipulation choices they made, by reading the study itself. In fact, I encourage you to read that study, because it's a great example of how the professionals approach data problems.</p><p>From here on in, however, you'll be stuck with my amateur and simplified attempts to visualize the raw, unadjusted data record.</p><h2 id="us-hurricane-data-1851-2019">US Hurricane Data: 1851-2019</h2><p>Our source for "Continental United States Hurricane Impacts/Landfalls" data is <a href="https://www.aoml.noaa.gov/hrd/hurdat/All_U.S._Hurricanes.html">this NOAA webpage</a>. </p><p>To download the data, I simply copied it by clicking my mouse at the top left (the "Year" heading field) and dragging all the way down to the bottom-right. I then pasted it into a plain-text editor on my local computer and saved it to a file with the extension <code>.csv</code>.</p><h3 id="how-to-clean-up-the-hurricane-data">How to Clean Up the Hurricane Data</h3><p>If you quickly look through the webpage itself you'll see some formatting that'll need cleaning up. Each decade is introduced with a single row containing nothing but a string looking like: <code>1850s</code>. We'll want to just drop those rows. Years with no events contain the string <code>none</code> in the second column. Those, too, will need to go.</p><p>There are some events that apparently have no data for their Max Wind speeds. Instead of a number (measured in knots), the speed values for those events are represented by five dashes (<code>-----</code>). We'll have to convert that to something we can work with.</p><p>And finally, while months are generally represented by three-letter abbreviations, there were a couple of events that stretched across two months. So we'll be able to properly process those, I'll therefore convert <code>Sp-Oc</code> and <code>Jl-Au</code> to <code>Sep</code> and <code>Jul</code> respectively. </p><p>The fact is that we won't actually be using the month column, so this won't really make any difference. But it's a good tool to know.</p><p>Here's how we set things up in Jupyter:</p><pre><code>import pandas as pd
import matplotlib as plt
import matplotlib.pyplot as plt
import numpy as np
df = pd.read_csv('all-us-hurricanes-noaa.csv')
</code></pre><p>Let's look at the data types for each column. We can ignore the strings in the States and Name column - we're not interested in those anyway. But we will need to do something with the date and Max Wind columns - they won't do us any good as <code>object</code>.</p><pre><code>df.dtypes
Year                                   object
Month                                  object
States Affected and Category by States object
Highest\nSaffir-\nSimpson\nU.S. Category    float64
Central Pressure\n(mb)                float64
Max Wind\n(kt)                         object
Name                                   object
dtype: object
</code></pre><p>So I'll filter all rows in the <code>Year</code> column for the letter <code>s</code> and simply drop them (<code>== False</code>). That will take care of all the decade headers (that is, those rows containing an <code>s</code> as part of something like <code>1850s</code>).</p><p>I'll similarly drop rows containing the string <code>None</code> in the <code>Month</code> column to eliminate years without storm events. </p><p>While quiet years could have some impact on our visualizations, I suspect that including them with some kind of null value would probably skew things even more the other way. They'd also greatly complicate our visualizations. </p><p>Finally, I'll replace those two multi-month rows.</p><pre><code>df = df[(df.Year.str.contains("s")) == False]
df = df[(df.Month.str.contains("None")) == False]
df = df.replace('Sp-Oc','Sep')
df = df.replace('Jl-Au','Jul')
</code></pre><p>Next, I'll use the handy Pandas <code>to-datetime</code> method to convert the three-letter month abbreviations to numbers between 1 and 12. The format code <code>%b</code> is one of Python's legal date-related designations and tells Python that we're working with a three-letter abbreviation. For the full list, see <a href="https://www.w3schools.com/python/gloss_python_date_format_codes.asp">this page.</a></p><pre><code>df.Month = pd.to_datetime(df.Month, format='%b').dt.month
</code></pre><p>I'd like to tighten up the headers a bit so they're a little easier to both read and reference in our code. <code>df.columns</code> will change all column header values to the list I specify here:</p><pre><code>df.columns =['Year', 'Month', 'States', 'Category',
'Pressure', 'Max Wind', 'Name']
</code></pre><p>I'll have to convert the Year data from string objects to integers, or Python won't know how to work with them appropriately. That's done using <code>astype</code>. </p><p>As advertised, I'll also convert the null (<code>-----</code>) values in <code>Max Wind</code> to <code>NaN</code> - which NumPy will read as "not a number." I'll then convert the data in <code>Max Wind</code> from <code>object</code> to <code>float</code>.</p><pre><code>df = df.astype({'Year': 'int'})
df = df.replace('-----',np.NaN)
df = df.astype({'Max Wind': 'float'})
</code></pre><p>Let's see how all that looks now:</p><pre><code>df.dtypes
Year    int64
Month   int64
States object
Category    float64
Pressure    float64
Max Wind    float64
Name   object
dtype: object
</code></pre><p>Much better.</p><h3 id="how-to-present-the-hurricane-data">How to Present the Hurricane Data</h3><p>Now, looking at our data, I'm going to suggest that we break out the three metrics: hurricane category, barometric pressure, and maximum wind speeds. </p><p>My thinking is that there's little to gain from the added complication by lumping them together, and we risk losing sight of important differences between incidents of lighter and more serious storms.</p><p>Of course, I can always isolate individual metrics to see what their distributions would look like. Using <code>value_counts</code> against the <code>Category</code> column, for instance, shows me that the lighter category 1 and 2 hurricanes are far more frequent than the more dangerous events.</p><pre><code>df['Category'].value_counts()
1.0    121
2.0     83
3.0     62
4.0     25
5.04
Name: Category, dtype: int64
</code></pre><p>And plotting a single histogram of the complete data set does give us a nice overview of the number of events (represented on the y-axis) through history, but we might be losing some of the finer details in the process.</p><p>From this histogram, it's obvious that there's been no noticeable change in storm frequency over time. To be sure that my choice of the number of bins we're using isn't unintentionally masking important trends, experiment with other values besides 25.</p><pre><code>df.hist(column='Year', bins=25)
df_wind = df[['Year','Max Wind']]
df_pressure = df[['Year','Pressure']]
</code></pre><p>Sending each of those dataframes straight to a plot will miss the point, because it won't distinguish between the severity of storms. So I'll show you how we can break out the data by category (1-5). This <code>for</code> loop will iterate through the numbers 1-6 (which is "Python" for returning the numbers between 1 and 5) and uses each of those numbers in turn to search for hurricanes of that category.</p><p>Rows whose category matches the number will be written to a new (temporary) dataframe called <code>df1</code> which will, in turn, be used to plot a histogram. The <code>plt.title</code> line applies a title for the printed graph that will include the category number (the current value of <code>converted_num</code>).</p><p>The loop will work through the process five times, each time writing the number of events the current category to <code>df1</code>. All five histograms will be printed, one after the other.</p><pre><code>for x in range(1, 6):
cat_num = x
converted_num = str(cat_num)
dfcat = df_category['Category']==(x)
df1 = df_category[dfcat]
df1.hist(column='Year', bins=20)
plt.title("Total Category " + (converted_num) + " Events")
import matplotlib as plt
import numpy as np
df = pd.read_csv('all-us-tropical-storms-noaa.csv')
</code></pre><h3 id="let-s-clean-up-the-tropical-storm-data">Let's Clean Up the Tropical Storm Data</h3><p>The rows representing years without events should, again, be removed:</p><pre><code>df = df[(df.Date.str.contains("None")) == False]
</code></pre><p>The <code>Date</code> column in this dataset has characters pointing to five footnotes: $, *, #, %, and &amp;. The footnotes contain important information, but those characters will give us grief if we don't remove them. </p><p>These commands will get that done, replacing all such strings in the <code>Date</code> column with nothing:</p><pre><code>df['Date'] = df.Date.str.replace('\$', '')
df['Date'] = df.Date.str.replace('\*', '')
df['Date'] = df.Date.str.replace('\#', '')
df['Date'] = df.Date.str.replace('\%', '')
df['Date'] = df.Date.str.replace('\&amp;', '')
</code></pre><p>Next, I'll reset the column headers. First, because it will be easier to work with nice, short names. But primarily because, as a Linux sysadmin, I find spaces in filenames or headings morally offensive.</p><pre><code>df.columns =['Storm#', 'Date', 'Time', 'Lat', 'Lon',
'MaxWinds', 'LandfallState', 'StormName']
</code></pre><p>The column data types are going to need some work:</p><pre><code>df.dtypes
Storm#      object
Date        object
Time        object
Lat         object
Lon         object
MaxWinds   float64
LandfallState     object
StormName   object
dtype: object
</code></pre><p>Let's see what our data looks like:</p><pre><code>df.head()
Storm#	Date		Time	Lat	Lon	MaxWindsLandfallState	StormName
6	10/19/1851	1500Z	41.1N	71.7W	50.0	NY	NaN
3	8/19/1856	1100Z	34.8	76.4	50.0	NC	NaN
4	9/30/1857	1000Z	25.8	97	50.0	TX	NaN
3	9/14/1858	1500Z	27.6	82.7	60.0	FL	NaN
3	9/16/1858	0300Z	35.2	75.2	50.0	NC	NaN
</code></pre><p>I'm actually not sure what those <code>Storm #</code> values are all about, but they're not hurting anyone. The dates are formatted much better than they were for the hurricane data. But I will need to convert them to a new format. Let's do it right and go with <code>datetime</code>.</p><pre><code>df.Date = pd.to_datetime(df.Date)
</code></pre><h3 id="how-to-present-the-tropical-storm-data">How to Present the Tropical Storm Data</h3><p>For our purposes, the only data column that really matters is MaxWinds - as that is what defines the intensity of the storm. This command will create a new dataframe made up of the <code>Date</code> and <code>MaxWinds</code> columns:</p><pre><code>df1 = df[['Date','MaxWinds']]
</code></pre><p>No reason to push this off: we might as well fire up a histogram right away. You'll immediately see the gap around 1970 where there was no data. You'll also see that, again, there doesn't seem to be much of an upward trend.</p><pre><code>df1['Date'].hist()
(362, 2)
</code></pre><p>Printing our dataframe shows us that the <code>MaxWinds</code> values are all multiples of 5. If you scan the data for yourself, you'll see that they range between 30 and 70 or so.</p><pre><code>df1
Date		MaxWinds
1	1851-10-19	50.0
6	1856-08-19	50.0
7	1857-09-30	50.0
8	1858-09-14	60.0
9	1858-09-16	50.0
...	...	...
391	2017-09-27	45.0
392	2018-05-28	40.0
393	2018-09-03	45.0
394	2018-09-03	45.0
395	2019-09-17	40.0
362 rows × 2 columns
</code></pre><p>So let's divide our data into four smaller sets as reasonable proxies for storms of various levels of intensity. I've created four dataframes and populated them with events falling in their narrower ranges (that is between 30 and 39 knots, 40 and 49, 50 and 59, and 60 and 79). This should give us a reasonable frame of reference for our events.</p><pre><code>df_30 = df1[df1['MaxWinds'].between(30, 39)]
df_40 = df1[df1['MaxWinds'].between(40, 49)]
df_50 = df1[df1['MaxWinds'].between(50, 59)]
df_60 = df1[df1['MaxWinds'].between(60, 79)]
</code></pre><p>Let's confirm that the cut-off points we've chosen make sense. This code will attractively print the number of rows in the index of each of our four dataforms.</p><pre><code>st1 = len(df_30.index)
print('The number of storms between 30 and 39: ', st1)
st2 = len(df_40.index)
print('The number of storms between 40 and 49: ', st2)
st3 = len(df_50.index)
print('The number of storms between 50 and 59: ', st3)
st4 = len(df_60.index)
print('The number of storms between 60 and 79: ', st4)
The number of storms between 30 and 39:  51
The number of storms between 40 and 49:  113
The number of storms between 50 and 59:  142
The number of storms between 60 and 79:  56
</code></pre><p>There probably is an elegant way to combine those four commands into one. But my philosophy is that syntax that would take me an hour to figure out will never outweigh the simplicity of five seconds of cutting and pasting. Ever.</p><p>We could also look just a bit deeper into the data using our old friend, <code>value_counts()</code>. This will show us that there were 71 40 knot events and 42 45 knot events throughout our time range.</p><pre><code>df_40['MaxWinds'].value_counts()
40.0    71
45.0    42
Name: MaxWinds, dtype: int64
</code></pre><p>We can plot a single line graph to display all four of our subsets together. This plot adds axis and plot labels and a legend to make the data easier to understand. The <code>subplot(111)</code> value controls the size of the figure.</p><pre><code>import matplotlib.pyplot as plt
fig = plt.figure()
ax = plt.subplot(111)
df_30['MaxWinds'].plot(ax=ax, label='df_30')
df_40['MaxWinds'].plot(ax=ax, label='df_40')
df_50['MaxWinds'].plot(ax=ax, label='df_50')
df_60['MaxWinds'].plot(ax=ax, label='df_60')
ax.set_ylabel('Wind Speed In Knots')
ax.set_xlabel('Time Between 1851 and 2019')
plt.title('Tropical Storms by Maximum Wind Speeds (knots)')
ax.legend()
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
